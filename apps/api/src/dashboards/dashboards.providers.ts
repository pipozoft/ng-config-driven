import { Connection } from 'mongoose';
import { DashboardSchema } from './schemas/dashboard.schema';

export const dashboardsProviders = [
  {
    provide: 'DASHBOARD_MODEL',
    useFactory: (connection: Connection) => connection.model('Dashboard', DashboardSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
