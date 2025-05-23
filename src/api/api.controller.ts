import { Controller, Get } from '@nestjs/common';
import { ApiService } from './api.service';

@Controller('api')
export class ApiController {
  constructor(private readonly apiService: ApiService) { }

  @Get('user')
  fetchNew(name: string) {
    return this.apiService.fetchGoogleNews(name);
  }
  @Get('status')
  fetchStatus() {
    return this.apiService.fetchStatus();
  }
}
