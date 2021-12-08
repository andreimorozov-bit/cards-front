export interface CardFilterState {
  series: string;
  number: string;
  min_credit: string;
  max_credit: string;
  ordering: string;
  status__in: string;
  status: StatusInterface;
}

export interface StatusInterface {
  active: boolean;
  inactive: boolean;
  expired: boolean;
}
