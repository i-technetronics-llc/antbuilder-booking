import { ApplicationEntity } from '@booking/entities/application.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(ApplicationEntity)
    private readonly appRepository: Repository<ApplicationEntity>
  ) {

  }
  getStatus(): string {
    return 'Pong!';
  }

  getAppInfo(): Promise<any[]> {
    return this.appRepository.find();
  }

  getAppInfoByKey(apiKey: string): Promise<any> {
    return this.appRepository.findOne({
      where: {
        ApiPubKey: apiKey
      }
    });
  }

  getAppInfoById(id: string): Promise<any> {
    return this.appRepository.findOne({
      where: {
        ApiPubKey: id
      }
    });
  }
}
