import type {MetadataRoute} from 'next';
import {categories,products} from '../lib/data';

const baseUrl='https://samwestdistributes.co.ke';

export default function sitemap():MetadataRoute.Sitemap{
  const staticRoutes=[
    {url:baseUrl+'/',changeFrequency:'daily' as const,priority:1},
    {url:baseUrl+'/catalog',changeFrequency:'daily' as const,priority:0.9},
  ];
  const categoryRoutes=categories.map(([slug])=>({
    url:baseUrl+'/category/'+slug,
    changeFrequency:'daily' as const,
    priority:0.85,
  }));
  const productRoutes=products.map(product=>({
    url:baseUrl+'/product/'+product.slug,
    changeFrequency:'weekly' as const,
    priority:0.8,
  }));
  return [...staticRoutes,...categoryRoutes,...productRoutes];
}
