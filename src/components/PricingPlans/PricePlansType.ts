//TIPANDO LA DATA DE DATAPRICEPLANS USANDO TYPESCRIPT
export type PricePlansData = {
  id: number;
  name: string;
  description: string;
  primary: boolean;
  prices: {
    id: number;
    name: string;
    price: string;
  }[];
  features: {
    id: number;
    name: string;
    active: boolean;
  }[];
}[];
