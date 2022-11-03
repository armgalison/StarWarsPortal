export interface Pagination<T> {
  count: number;
  next: string;
  previous: string;
  results: Array<T>;
  page: number;
}
