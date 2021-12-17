export interface CardInterface {
  id: string;
  series: string;
  number: string;
  credit: number;
  created: string;
  expiration_months: number;
  expiration_date: string;
}

export interface CardsState {
  count: number;
  cards: CardInterface[];
}
