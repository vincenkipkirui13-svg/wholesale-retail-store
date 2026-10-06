import type {MetadataRoute} from 'next';

export default function robots():MetadataRoute.Robots{
  return {
    rules:{userAgent:'*',allow:'/',disallow:['/admin/','/cart','/checkout']},
    sitemap:'https://samwestdistributors.co.ke/sitemap.xml',
    host:'https://samwestdistributors.co.ke',
  };
}
