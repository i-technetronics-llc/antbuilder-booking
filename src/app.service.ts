import { ApplicationsEntity } from '@booking/entities/application.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(ApplicationsEntity)
    private readonly appRepository: Repository<ApplicationsEntity>
  ) { }

  getStatus(): string {
    return 'Pong!';
  }

  async getAppInfo(): Promise<any[]> {
    return this.appRepository.find();
  }

  async getAppInfoByKey(apiKey: string): Promise<any> {
    return this.appRepository.findOne({
      where: {
        ApiPubKey: apiKey
      }
    });
  }

  async getAppInfoById(id: string): Promise<any> {
    return this.appRepository.findOne({
      where: {
        ApiPubKey: id
      }
    });
  }
}
