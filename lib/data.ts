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

// Decorative category photography is matched to the merchandise represented by each section.
// It uses free-to-use Pexels imagery and avoids polished supermarket aisle photography.
// Product imagery itself remains tied to authorized imported product records.
export const categoryImages: Record<string,string> = {
  'food-groceries': 'https://images.pexels.com/photos/38708242/pexels-photo-38708242.jpeg?auto=compress&cs=tinysrgb&w=1260',
  'home-cleaning': 'https://images.pexels.com/photos/16063719/pexels-photo-16063719.jpeg?auto=compress&cs=tinysrgb&w=1260',
  'personal-care': 'https://images.pexels.com/photos/6690916/pexels-photo-6690916.jpeg?auto=compress&cs=tinysrgb&w=1260',
  'baby-care': 'https://images.pexels.com/photos/28846860/pexels-photo-28846860.jpeg?auto=compress&cs=tinysrgb&w=1260',
  'beverages': 'https://images.pexels.com/photos/28505434/pexels-photo-28505434.jpeg?auto=compress&cs=tinysrgb&w=1260',
  'kitchen-household': 'https://images.pexels.com/photos/10676875/pexels-photo-10676875.jpeg?auto=compress&cs=tinysrgb&w=1260',
  'tissues-paper': 'https://images.pexels.com/photos/7372840/pexels-photo-7372840.jpeg?auto=compress&cs=tinysrgb&w=1260',
  'other': 'https://images.pexels.com/photos/33023725/pexels-photo-33023725.jpeg?auto=compress&cs=tinysrgb&w=1260'
};

export function formatKes(value:number){return `KSh ${value.toLocaleString('en-KE')}`;}
export function getProduct(slug:string){return products.find(p=>p.slug===slug);}
