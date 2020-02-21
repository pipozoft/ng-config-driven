import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateDashboardDto } from './dto/create-dashboard.dto';
import { Dashboard } from './interfaces/dashboard.interface';

@Injectable()
export class DashboardsService {
  constructor(@Inject('DASHBOARD_MODEL') private readonly dashboardModel: Model<Dashboard>) {}

  async create(createDashboardDto: CreateDashboardDto): Promise<Dashboard> {
    const createdDashboard = new this.dashboardModel(createDashboardDto);
    return createdDashboard.save();
  }

  async findAll(): Promise<Dashboard[]> {
    return this.dashboardModel.find().exec();
  }

  async find(id): Promise<Dashboard>{
    return await this.dashboardModel.findOne({_id: id});
  }

  async findByURI(uri): Promise<Dashboard>{
    return await this.dashboardModel.findOne({uri});
  }

  async update(id, createDashboardDto: CreateDashboardDto): Promise<Dashboard> {
    return await this.dashboardModel.findByIdAndUpdate(id, createDashboardDto, { new: true });
  }

  async delete(id): Promise<any> {
    return await this.dashboardModel.findByIdAndRemove(id);
  }
}
