import { Module } from '@nestjs/common';
import { DataQueriesController } from './data-queries.controller';
import { DataQueriesService } from './data-queries.service';
import { dataQueriesProviders } from './data-queries.providers';
import { DatabaseModule } from '../database/database.module';
import { ArtistsModule } from '../artists/artists.module';

@Module({
  imports: [
    DatabaseModule,
    ArtistsModule
  ],
  controllers: [DataQueriesController],
  providers: [DataQueriesService, ...dataQueriesProviders],
})
export class DataQueriesModule {}
