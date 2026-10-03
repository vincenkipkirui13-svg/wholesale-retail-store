import type { Product } from './types';

// Production rule: these are catalog records only when imported from an authorized source.
// The default storefront intentionally contains no fabricated commercial products.
export const products: Product[] = [];

export const categories = [
  ['food-groceries','Food & Groceries','Staples, cooking ingredients and everyday pantry goods'],
  ['home-cleaning','Home & Cleaning','Laundry, dishwashing, surface care and household essentials'],
  ['personal-care','Personal Care','Bath, oral care, skin care and everyday hygiene'],
  ['baby-care','Baby Care','Baby hygiene and care essentials'],
  ['beverages','Beverages','Everyday drinks and beverage products'],
  ['kitchen-household','Kitchen & Household','Kitchen supplies, storage and household essentials'],
  ['tissues-paper','Tissues & Paper','Tissues, paper towels and related paper goods'],
  ['other','Other Essentials','Additional legitimate imported products']
] as const;

// Decorative category photography only; product imagery remains tied to imported product records.
export const categoryImages: Record<string,string> = {
  'food-groceries': 'https://i2-prod.staffordshire-live.co.uk/incoming/article6648001.ece/ALTERNATES/s615/0_GettyImages-1141999792.jpg',
  'home-cleaning': 'https://www.joonsquareusa.com/usermanage/image/business/target-cape-north-store-lee-fl-7887/target-cape-north-store-lee-fl-target-cape-north-02.jpg',
  'personal-care': 'https://cdn.bmstores.co.uk/images/dmImage/SourceImage/668-ashby-de-la-zouch-store-opening-health-beauty.png',
  'baby-care': 'https://st.benesse.ne.jp/online/images/supermarket_c1.jpg',
  'beverages': 'https://static2.mondo.rs/Picture/1307226/jpeg/Prodavnica-Market-Namirnice-Pice.jpeg?ts=2025-01-14T11%3A38%3A02',
  'kitchen-household': 'https://www.edeka.de/uploads/regionen/nordbayern_sachsen_thuringen/maerkte/doelz-beuchaer-8002094/haushaltshelfer-doelz-beuchaer.jpg',
  'tissues-paper': 'https://cdn.prod.website-files.com/65f9ddc0d85e74ddbea4dae3/65f9ddc0d85e74ddbea4dcae_tissue-768x512.jpeg',
  'other': 'https://assets.rbl.ms/55139353/origin.jpg'
};

export function formatKes(value:number){return `KSh ${value.toLocaleString('en-KE')}`;}
export function getProduct(slug:string){return products.find(p=>p.slug===slug);}