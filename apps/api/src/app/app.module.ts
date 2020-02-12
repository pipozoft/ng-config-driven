import { Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';
import { DashboardsModule } from '../dashboards/dashboards.module';
import { ArtistsModule } from '../artists/artists.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest'),
    DashboardsModule,
    ArtistsModule,
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
