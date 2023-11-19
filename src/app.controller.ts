import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Application Manager')
@Controller({
  path: 'applications',
  version: '1'
})
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('ping')
  getPing(): string {
    return this.appService.getStatus();
  }

  @Get('')
  getAppInfo(): Promise<any> {
    return this.appService.getAppInfo();
  }

  @Get(':key')
  getAppInfoByKey(apiKey: string): Promise<any> {
    return this.appService.getAppInfoByKey(apiKey);
  }

  @Get(':id')
  getAppInfoById(id: string): Promise<any> {
    return this.appService.getAppInfoByKey(id);
  }
}
