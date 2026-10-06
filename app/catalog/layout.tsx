import type {Metadata} from 'next';

export const metadata:Metadata={
  title:'Wholesale & Retail Catalogue',
  description:'Browse food, groceries, beverages, household and cleaning essentials from Sam West Distributors in Kenya. Compare retail and wholesale prices.',
  alternates:{canonical:'/catalog'},
};

export default function CatalogLayout({children}:{children:React.ReactNode}){return children;}
