import type {ImportStatus,Product} from './types';
export type SourceRecord=Partial<Product>&{variantId?:string;canonicalUrl?:string;sourcePrice?:number};
export type ValidationResult={status:ImportStatus;reason?:string;record?:SourceRecord};

export function validateSourceRecord(r:SourceRecord):ValidationResult{
  if(!r.sourceName||!r.sourceProductId||!r.name||!r.category)return {status:'invalid',reason:'Missing required source identity or product fields',record:r};
  if(!r.image)return {status:'invalid',reason:'Missing authorized source image',record:r};
  if(r.sourcePrice!=null&&(!Number.isFinite(r.sourcePrice)||r.sourcePrice<0))return {status:'invalid',reason:'Invalid source price',record:r};
  return {status:'new',record:r};
}
export function identityKeys(r:SourceRecord){return [r.sourceName&&`source:${r.sourceName}:${r.sourceProductId}`,r.gtin&&`gtin:${r.gtin}`,r.variantId&&`variant:${r.sourceName}:${r.variantId}`,r.canonicalUrl&&`url:${r.canonicalUrl}`].filter(Boolean) as string[];}
export function classifyImport(r:SourceRecord,existing:Map<string,Product>):ValidationResult{const v=validateSourceRecord(r);if(v.status!=='new')return v;for(const key of identityKeys(r)){for(const p of existing.values()){if(identityKeys({...p,variantId:r.variantId}).includes(key))return {status:'duplicate',reason:`Existing identity match: ${key}`,record:r};}}return {status:'new',record:r};}