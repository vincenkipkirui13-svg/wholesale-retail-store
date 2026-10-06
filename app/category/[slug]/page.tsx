import Link from 'next/link';
import {notFound} from 'next/navigation';
import type {Metadata} from 'next';
import Icon from '../../../components/Icon';
import AddProduct from '../../../components/add-product';
import {categories,formatKes,products} from '../../../lib/data';

const baseUrl='https://samwestdistributes.co.ke';

export function generateStaticParams(){
  return categories.map(([slug])=>({slug}));
}

export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{
  const {slug}=await params;
  const category=categories.find(([key])=>key===slug);
  if(!category)return {};
  const [,name,description]=category;
  return {
    title:`${name} Wholesale & Retail`,
    description:`${description}. Shop ${name.toLowerCase()} products with retail and wholesale pricing from Sam West Distributes in Kenya.`,
    alternates:{canonical:`/category/${slug}`},
    openGraph:{type:'website',title:`${name} Wholesale & Retail | Sam West Distributes`,description,url:`${baseUrl}/category/${slug}`},
  };
}

export default async function CategoryPage({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;
  const category=categories.find(([key])=>key===slug);
  if(!category)notFound();
  const [,name,description]=category;
  const categoryProducts=products.filter(p=>p.category===slug);
  const jsonLd={
    '@context':'https://schema.org',
    '@type':'CollectionPage',
    name:`${name} Wholesale & Retail`,
    description,
    url:`${baseUrl}/category/${slug}`,
    mainEntity:{
      '@type':'ItemList',
      numberOfItems:categoryProducts.length,
      itemListElement:categoryProducts.map((p,index)=>({'@type':'ListItem',position:index+1,url:`${baseUrl}/product/${p.slug}`,name:p.name}))
    }
  };
  return <main className="page">
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(jsonLd)}}/>
    <div className="container">
      <Link className="back-link" href="/catalog">← Back to catalogue</Link>
      <div className="page-head">
        <div>
          <div className="eyebrow">CATEGORY</div>
          <h1>{name}.</h1>
          <p>{description}. Browse {categoryProducts.length} listed products with retail and wholesale pricing.</p>
        </div>
      </div>
      {categoryProducts.length===0 ? <div className="empty-state"><div className="empty-icon"><Icon name="box" size={30}/></div><h2>No products in this category</h2><p>This category currently has no published product records.</p><Link className="btn btn-primary" href="/catalog">Browse all products</Link></div> :
      <div className="product-grid">{categoryProducts.map(p=><article className="product-card" key={p.id}>
        <Link href={`/product/${p.slug}`} className="product-media">{p.image?<img src={p.image} alt={p.name}/>:<div><Icon name="box" size={34}/><span>Source image</span></div>}</Link>
        <div className="product-body"><small>{p.brand||name}</small><Link href={`/product/${p.slug}`}><h3>{p.name}</h3></Link><p>{p.unit}</p><div className="product-price"><strong>{formatKes(p.retailPrice)}</strong><Link className="text-link" href={`/product/${p.slug}`}>View <Icon name="arrow" size={14}/></Link></div><AddProduct product={p}/></div>
      </article>)}</div>}
    </div>
  </main>;
}
