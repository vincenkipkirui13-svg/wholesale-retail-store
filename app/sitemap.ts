import type {MetadataRoute} from 'next';
import {products} from '../lib/data';

const baseUrl='https://samwestdistributes.co.ke';

export default function sitemap():MetadataRoute.Sitemap{
  const now=new Date();
  const staticRoutes=['/','/catalog'].map(path=>({url:`${baseUrl}${path}`,lastModified:now,changeFrequency:path==='/'?'daily' as const:'daily' as const,priority:path==='/'?1:0.9}));
  const productRoutes=products.map(product=>({url:`${baseUrl}/product/${product.slug}`,lastModified:now,changeFrequency:'weekly' as const,priority:0.8}));
  return [...staticRoutes,...productRoutes];
}
