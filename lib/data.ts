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

// Decorative wholesale-style category photography only; product imagery remains tied to imported product records.
// These images intentionally show bulk stock, cartons, crates and warehouse handling rather than supermarket shelves.
export const categoryImages: Record<string,string> = {
  // Category photography is product-led: one wholesale-store feel, with each card showing the stock that belongs in that department.
  // No people-focused scenes and no polished supermarket displays.
  'food-groceries': 'https://images.pexels.com/photos/20329104/pexels-photo-20329104.jpeg?auto=compress&cs=tinysrgb&w=1260',
  'home-cleaning': 'https://images.pexels.com/photos/6995202/pexels-photo-6995202.jpeg?auto=compress&cs=tinysrgb&w=1260',
  'personal-care': 'https://images.pexels.com/photos/28846857/pexels-photo-28846857.jpeg?auto=compress&cs=tinysrgb&w=1260',
  'baby-care': 'https://images.pexels.com/photos/28846860/pexels-photo-28846860.jpeg?auto=compress&cs=tinysrgb&w=1260',
  'beverages': 'https://images.pexels.com/photos/533353/pexels-photo-533353.jpeg?auto=compress&cs=tinysrgb&w=1260',
  'kitchen-household': 'https://images.pexels.com/photos/28846853/pexels-photo-28846853.jpeg?auto=compress&cs=tinysrgb&w=1260',
  'tissues-paper': 'https://images.pexels.com/photos/3958190/pexels-photo-3958190.jpeg?auto=compress&cs=tinysrgb&w=1260',
  'other': 'https://images.pexels.com/photos/15845375/pexels-photo-15845375.jpeg?auto=compress&cs=tinysrgb&w=1260'
};

export function formatKes(value:number){return `KSh ${value.toLocaleString('en-KE')}`;}
export function getProduct(slug:string){return products.find(p=>p.slug===slug);}