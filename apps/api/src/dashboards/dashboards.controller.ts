import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { CreateDashboardDto } from './dto/create-dashboard.dto';
import { DashboardsService } from './dashboards.service';
import { Dashboard } from './interfaces/dashboard.interface';

@Controller('dashboards')
export class DashboardsController {
  constructor(private readonly dashboardsService: DashboardsService) {}

  @Post()
  async create(@Body() createDashboardDto: CreateDashboardDto) {
    this.dashboardsService.create(createDashboardDto);
  }

  @Get()
  async findAll(): Promise<Dashboard[]> {
    return this.dashboardsService.findAll();
  }

  @Get(':id')
  async getDashboard(@Param('id') id: String){
      return await this.dashboardsService.find(id);
  }

  @Put(':id')
  async updateDashboard(
    @Param('id') id: String,
    @Body() createDashboardDto: CreateDashboardDto
  ){
    return await this.dashboardsService.update(id, createDashboardDto);
  }

  @Delete(':id')
  async deleteDashboard(@Param('id') id: String){
    return await this.dashboardsService.delete(id);
  }

  @Post('/uri')
  async findByURI(@Body() query){
      if (query && query.uri) {
        return await this.dashboardsService.findByURI(query.uri);
      }
  }
}
