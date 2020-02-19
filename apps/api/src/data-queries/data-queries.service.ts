import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateDataQueryDto } from './dto/create-data-query.dto';
import { DataQuery } from './interfaces/data-query.interface';

import { ArtistsService } from '../artists/artists.service';

@Injectable()
export class DataQueriesService {
  constructor(
    @Inject('DATA_QUERY_MODEL') private readonly dataQueryModel: Model<DataQuery>,
    @Inject('ArtistsService') private readonly artistsService: ArtistsService
  ) {}

  async create(createDataQueryDto: CreateDataQueryDto): Promise<DataQuery> {
    const createdDataQuery = new this.dataQueryModel(createDataQueryDto);
    return createdDataQuery.save();
  }

  async findAll(): Promise<DataQuery[]> {
    return this.dataQueryModel.find().exec();
  }

  async find(id): Promise<DataQuery>{
    return await this.dataQueryModel.findOne({_id: id});
  }

  async findAndExcecute(uri: string): Promise<any>{
    const dq = await this.dataQueryModel.findOne({uri});
    if (!dq) {
      return {error: `Data Query with URI: ${uri} dos not exist!`};
    }

    const query = dq.filter.query ? JSON.parse(dq.filter.query) : {};
    const sort = dq.filter.sort || {};
    const limit = dq.filter.limit || null;

    if (dq.type === 'aggregate') {
      return await this.artistsService.aggregate(query);
    }
    return await this.artistsService.findAll(query, sort, limit);
  }
}
