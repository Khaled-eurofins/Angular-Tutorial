export type Currency = 'EUR' | 'USD' | 'LBP';

export interface Price {
  currency: Currency;
  value: number;
  displayValue: string;
  discount?: number;
}

export interface Book {
  isbn: string;
  title: string;
  subTitle: string;
  author: string;
  publish_date: string;
  publisher: string;
  pages: number;
  description: string;
  image: string;
  price: Price;
  id: number;
}
