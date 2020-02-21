import { Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';
import { DashboardsModule } from '../dashboards/dashboards.module';
import { ArtistsModule } from '../artists/artists.module';
import { DataQueriesModule } from '../data-queries/data-queries.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/ngVikings'),
    DashboardsModule,
    ArtistsModule,
    DataQueriesModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
