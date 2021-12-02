export interface CardInterface {
  id: string;
  series: string;
  number: string;
  credit: number;
  created: string;
  expiration_months: number;
  expiration_date: string;
}

export interface PurchaseInterface {
  id: string;
  created: string;
  card: string;
  product: ProductInterface | null;
  quantity: number;
  price: number;
}

export interface ProductInterface {
  id: string;
  title: string;
  description: string;
  price: number;
  inventory: number;
}

export interface CreateCardDto {
  series: number;
  credit: number;
  expiration_months: number;
  quantity: number;
}

export interface CreateProductDto {
  title: string;
  description: string;
  price: number | null;
  inventory: number | null;
}

export interface CardFilterInterface {
  series: string;
  number: string;
  min_credit: string;
  max_credit: string;
  ordering: string;
  status__in: string;
}
