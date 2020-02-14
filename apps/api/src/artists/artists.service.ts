import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateArtistDto } from './dto/create-artist.dto';
import { Artist } from './interfaces/artist.interface';

@Injectable()
export class ArtistsService {
  constructor(@Inject('ARTIST_MODEL') private readonly artistModel: Model<Artist>) {}

  async create(createArtistDto: CreateArtistDto): Promise<Artist> {
    const createdDashboard = new this.artistModel(createArtistDto);
    return createdDashboard.save();
  }

  async findAll(query: object, sort = {}, limit: number | null): Promise<Artist[]> {
    return await this.artistModel.find(query).sort(sort).limit(limit).exec();
  }

  async find(id): Promise<Artist>{
    return await this.artistModel.findOne({_id: id});
  }

  async aggregate(query: any): Promise<any[]>{
    return await this.artistModel.aggregate(query);
  }

  async distintNames(): Promise<any[]>{
    return await this.artistModel.distinct('name');
  }
}
