export interface Dashboard {
  _id: string;
  uri: string;
  title: string;
  theme: any;
  widgets: any[];
}

export interface Filter {
  query: any;
  sort: any;
  limit: number;
}

export interface DataQuery {
  _id: string;
  uri: string;
  filter: Filter;
  type: string;
}
