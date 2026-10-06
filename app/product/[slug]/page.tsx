import Link from 'next/link';
import {notFound} from 'next/navigation';
import {getProduct,formatKes,priceTone} from '../../../lib/data';
import type {Metadata} from 'next';

import AddProduct from '../../../components/add-product';
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{
  const {slug}=await params;
  const p=getProduct(slug);
  if(!p) return {};
  const description=(p.description||`${p.name} ${p.unit} available from Sam West Distributors with retail and wholesale pricing in Kenya.`).slice(0,160);
  return {
    title:`${p.name} ${p.unit}`,
    description,
    alternates:{canonical:`/product/${p.slug}`},
    openGraph:{type:'website',title:`${p.name} ${p.unit} | Sam West Distributors`,description,url:`https://samwestdistributors.co.ke/product/${p.slug}`,images:p.image?[{url:p.image,alt:p.name}]:[]},
  };
}

export default async function ProductPage({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const p=getProduct(slug);if(!p)notFound();
    const productJsonLd={'@context':'https://schema.org','@type':'Product',name:p.name,description:p.description||`${p.name} ${p.unit}`,image:p.image?[p.image]:undefined,sku:p.sourceProductId,brand:p.brand?{'@type':'Brand',name:p.brand}:undefined,offers:{'@type':'Offer',url:`https://samwestdistributors.co.ke/product/${p.slug}`,priceCurrency:'KES',price:String(p.retailPrice),availability:p.availability==='available'?'https://schema.org/InStock':'https://schema.org/OutOfStock'}};
  return <main className="page"><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(productJsonLd)}}/><div className="container"><Link className="back-link" href="/catalog">← Back to catalogue</Link><div className="detail-grid"><div className="detail-media">{p.image?<img src={p.image} alt={p.name}/>:<div><span>Verified source image appears here after import</span></div>}</div><div className="detail-copy"><div className="eyebrow">{p.brand}</div><h1>{p.name}</h1><p className="detail-unit">{p.unit}</p><p>{p.description||'Product information is displayed from the authorized source record.'}</p><div className="price-box"><div><small>Retail</small><strong className={priceTone(p.id)}>{formatKes(p.retailPrice)}</strong></div><div><small>Wholesale · min {p.wholesaleMinQty}</small><strong className={priceTone(`${p.id}-wholesale`)}>{formatKes(p.wholesalePrice)}</strong></div></div><AddProduct product={p}/><div className="source-note">Source: {p.sourceName} · Product ID: {p.sourceProductId}</div></div></div></div></main>}