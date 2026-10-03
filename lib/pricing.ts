import type {CustomerMode,Product} from './types';
export function sellingPrice(product:Product,mode:CustomerMode){return mode==='wholesale'?product.wholesalePrice:product.retailPrice;}
export function validateSellingPrices(retail:number,wholesale:number){return Number.isFinite(retail)&&Number.isFinite(wholesale)&&retail>=0&&wholesale>=0;}