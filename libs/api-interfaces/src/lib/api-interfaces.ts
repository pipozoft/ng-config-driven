export interface WidgetConfig {
  queryUri: string;
  transformationFunction: string;
  chartOptions?: any;
  value: any;
}

export interface Widget {
  _id: string;
  title: string;
  type: string;
  size: number;
  config: WidgetConfig;
}

export interface Dashboard {
  _id: string;
  uri: string;
  title: string;
  theme: any;
  widgets: Widget[];
}

export interface Filter {
  query: string;
  sort: any;
  limit: number;
}

export interface DataQuery {
  _id: string;
  uri: string;
  filter: Filter;
  type: string;
}
