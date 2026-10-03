import type { Product } from './types';

// Preview-only catalogue records added so the new category/product layout can be inspected.
// These are real publicly listed products; prices reflect the referenced Kenyan listings at search time.
// Replace these preview records with the authorized production import feed before launch.
export const products: Product[] = [
  {id:'43644',slug:'unga-exe-atta-mark-1-fortified-wheat-flour-2kg',name:'Unga Exe Atta Mark 1 Fortified Wheat Flour 2Kg',brand:'UNGA',category:'food-groceries',unit:'2Kg',retailPrice:183,wholesalePrice:183,wholesaleMinQty:12,availability:'available',sourceName:'Carrefour Kenya',sourceProductId:'43644',image:'https://cdn.mafrservices.com/sys-master-root/h6b/h66/12456744583198/43644_Main.jpg',tags:['flour','wheat','chapati']},
  {id:'43635',slug:'hostess-maize-flour-2kg',name:'Hostess Maize Flour 2Kg',brand:'HOSTESS',category:'food-groceries',unit:'2Kg',retailPrice:174,wholesalePrice:174,wholesaleMinQty:12,availability:'available',sourceName:'Carrefour Kenya',sourceProductId:'43635',image:'https://media.edgexm.co.ke/photos/products/Hostess-Maize-Meal-2Kg.jpg',tags:['unga','maize flour','ugali']},
  {id:'13867',slug:'blue-band-original-spread-500g',name:'Blue Band Original Spread 500g',brand:'BLUE BAND',category:'food-groceries',unit:'500g',retailPrice:269,wholesalePrice:269,wholesaleMinQty:12,availability:'available',sourceName:'Carrefour Kenya',sourceProductId:'13867',image:'https://gentilsshop.com/cdn/shop/products/IMG_3314_1200x1200.jpg?v=1609777155',tags:['margarine','spread']},
  {id:'181912',slug:'weetabix-wholegrain-cereal-425g',name:'Weetabix Wholegrain Cereal 425G',brand:'WEETABIX',category:'food-groceries',unit:'425g',retailPrice:378,wholesalePrice:378,wholesaleMinQty:12,availability:'available',sourceName:'Carrefour Kenya',sourceProductId:'181912',image:'https://cdn.mafrservices.com/pim-content/KEN/media/product/181912/1743512403/181912_main.jpg?im=Resize%3D480',tags:['cereal','breakfast']},
  {id:'6161115173851',slug:'royco-nyama-choma-spice-100g',name:'Royco Nyama Choma Spice 100g',brand:'ROYCO',category:'food-groceries',unit:'100g',retailPrice:250,wholesalePrice:250,wholesaleMinQty:12,availability:'available',sourceName:'Carrefour Kenya',sourceProductId:'6161115173851',image:'https://assets.unileversolutions.com/v1/126931456.png',tags:['spices','seasoning','nyama choma']},
  {id:'dettol-lemon-900ml',slug:'dettol-multipurpose-cleaner-lemon-900ml',name:'Dettol MultiPurpose Cleaner Lemon 900ml',brand:'DETTOL',category:'home-cleaning',unit:'900ml',retailPrice:1991,wholesalePrice:1991,wholesaleMinQty:6,availability:'available',sourceName:'Dettol KE / Kenya market listing',sourceProductId:'dettol-multipurpose-cleaner-lemon-900ml',image:'https://karoutonlinelb.com/cdn/shop/products/6295120031216_1024x1024.jpg?v=1667753093',tags:['cleaner','disinfectant','lemon']},
  {id:'6295120001356',slug:'dettol-multipurpose-cleaner-pine-900ml',name:'Dettol MultiPurpose Cleaner Pine 900ml',brand:'DETTOL',category:'home-cleaning',unit:'900ml',retailPrice:1991,wholesalePrice:1991,wholesaleMinQty:6,availability:'available',sourceName:'Dettol KE / Kenya market listing',sourceProductId:'6295120001356',image:'https://cdn.mafrservices.com/sys-master-root/he4/h0b/9881743589406/403187_main.jpg',tags:['cleaner','disinfectant','pine']},
  {id:'dettol-lavender-900ml',slug:'dettol-multipurpose-cleaner-lavender-900ml',name:'Dettol MultiPurpose Cleaner Lavender 900ml',brand:'DETTOL',category:'home-cleaning',unit:'900ml',retailPrice:1991,wholesalePrice:1991,wholesaleMinQty:6,availability:'available',sourceName:'Dettol KE / Kenya market listing',sourceProductId:'dettol-multipurpose-cleaner-lavender-900ml',image:'https://img.ananinja.com/media/bra-public-files/services-admin/files/249d0d59-9926-44bd-8459-d4b643e97995',tags:['cleaner','disinfectant','lavender']},
  {id:'dettol-aqua-900ml',slug:'dettol-multipurpose-cleaner-aqua-900ml',name:'Dettol MultiPurpose Cleaner Aqua Marine 900ml',brand:'DETTOL',category:'home-cleaning',unit:'900ml',retailPrice:1895,wholesalePrice:1895,wholesaleMinQty:6,availability:'available',sourceName:'Dettol KE / Kenya market listing',sourceProductId:'dettol-multipurpose-cleaner-aqua-900ml',image:'https://cdn.mafrservices.com/pim-content/UAE/media/product/1686912/1760418605/1686912_main.jpg',tags:['cleaner','disinfectant','aqua']},
  {id:'dettol-soap-60g',slug:'dettol-antibacterial-soap-original-60g',name:'Dettol Antibacterial Soap Original 60g',brand:'DETTOL',category:'personal-care',unit:'60g',retailPrice:100,wholesalePrice:100,wholesaleMinQty:24,availability:'available',sourceName:'Dettol KE / Kenya market listing',sourceProductId:'dettol-antibacterial-soap-original-60g',image:'https://www.unvdc.com/images/product/dettol-bar-soap-60gr-original.jpg',tags:['soap','antibacterial','personal care']}
];

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

export const categoryImages: Record<string,string> = {
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
