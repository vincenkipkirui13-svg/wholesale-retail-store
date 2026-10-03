export type CustomerMode = 'retail' | 'wholesale';
export type Availability = 'available' | 'unavailable' | 'discontinued';
export type ImportStatus = 'new' | 'existing' | 'updated' | 'unavailable' | 'failed' | 'invalid' | 'duplicate';
export type Product = {
  id: string; slug: string; name: string; brand: string; category: string; unit: string;
  retailPrice: number; wholesalePrice: number; wholesaleMinQty: number; availability: Availability;
  sourceName: string; sourceProductId: string; gtin?: string; image?: string; description?: string;
  tags: string[]; variantGroup?: string;
};