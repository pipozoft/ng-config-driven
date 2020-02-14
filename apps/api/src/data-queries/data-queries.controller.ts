import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateDataQueryDto } from './dto/create-data-query.dto';
import { DataQueriesService } from './data-queries.service';
import { DataQuery } from './interfaces/data-query.interface';

@Controller('dataqueries')
export class DataQueriesController {
  constructor(private readonly dataQueriesService: DataQueriesService) {}

  @Post()
  async create(@Body() createDataQueryDto: CreateDataQueryDto) {
    this.dataQueriesService.create(createDataQueryDto);
  }

  @Get()
  async findAll(): Promise<DataQuery[]> {
    return this.dataQueriesService.findAll();
  }

  @Get(':id')
  async getDataQuery(@Param('id') id: String){
      return await this.dataQueriesService.find(id);
  }

  @Post('/exec')
  async execDataQuery(@Body() query){
      if (query && query.uri) {
        return await this.dataQueriesService.findAndExcecute(query.uri);
      }
  }
}
