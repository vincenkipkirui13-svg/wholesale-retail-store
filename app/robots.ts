import type {MetadataRoute} from 'next';

export default function robots():MetadataRoute.Robots{
  return {
    rules:{userAgent:'*',allow:'/',disallow:['/admin/','/cart','/checkout']},
    sitemap:'https://samwestdistributes.co.ke/sitemap.xml',
    host:'https://samwestdistributes.co.ke',
  };
}
