import { Module } from '@nestjs/common';
import { DashboardsController } from './dashboards.controller';
import { DashboardsService } from './dashboards.service';
import { dashboardsProviders } from './dashboards.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [DashboardsController],
  providers: [DashboardsService, ...dashboardsProviders],
})
export class DashboardsModule {}
