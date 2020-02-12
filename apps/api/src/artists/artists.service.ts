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

  async findAll(): Promise<Artist[]> {
    return this.artistModel.find().exec();
  }

  async find(id): Promise<Artist>{
    return await this.artistModel.findOne({_id: id});
  }
}
