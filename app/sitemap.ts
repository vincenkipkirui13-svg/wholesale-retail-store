import type {MetadataRoute} from 'next';
import {products} from '../lib/data';

const baseUrl='https://samwestdistributes.co.ke';

export default function sitemap():MetadataRoute.Sitemap{
  const staticRoutes=[
    {url:baseUrl+'/',changeFrequency:'daily' as const,priority:1},
    {url:baseUrl+'/catalog',changeFrequency:'daily' as const,priority:0.9},
  ];
  const productRoutes=products.map(product=>({
    url:baseUrl+'/product/'+product.slug,
    changeFrequency:'weekly' as const,
    priority:0.8,
  }));
  return [...staticRoutes,...productRoutes];
}
