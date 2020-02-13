import { Connection } from 'mongoose';
import { DataQuerySchema } from './schemas/data-query.schema';

export const dataQueriesProviders = [
  {
    provide: 'DATA_QUERY_MODEL',
    useFactory: (connection: Connection) => connection.model('DataQuery', DataQuerySchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
