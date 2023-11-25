import { Controller, Get, HttpStatus } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { promises } from 'dns';

@ApiTags('Application Manager')
@Controller({
  path: 'applications',
  version: '1'
})
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiOperation({
    summary: 'Ping service availability'
  })
  @Get('ping')
  public async getPing(): Promise<any> {
    return  {
      status: HttpStatus.OK,
      message: 'Service available!!!',
      response: await this.appService.getStatus()
    }
  }

  @ApiOperation({
    summary: 'Get service-application information'
  })
  @Get('info')
  public async getAppInfo(): Promise<any> {
    return {
      status: HttpStatus.OK,
      message: 'Service available!!!',
      response: await this.appService.getAppInfo()
    }
  }

  @ApiOperation({
    summary: 'Get service-application information by key'
  })
  @Get(':key')
  public async getAppInfoByKey(apiKey: string): Promise<any> {
    const response = await this.appService.getAppInfoByKey(apiKey);
    return {
      status: HttpStatus.OK,
      message: 'Service available!!!',
      response: response
    }
  }

  @ApiOperation({
    summary: 'Get service-application information by id'
  })
  @Get(':id')
  public async getAppInfoById(id: string): Promise<any> {
    return {
      status: HttpStatus.OK,
      message: 'Service available!!!',
      response: await this.appService.getAppInfoByKey(id)
    }
  }
}
