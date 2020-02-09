import { Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';
import { DashboardsModule } from '../dashboards/dashboards.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest'),
    DashboardsModule,
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
