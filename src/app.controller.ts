import { Controller, Get, HttpCode, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/cat')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/test')
  @HttpCode(204)
  test(): string {
    return 'test test';
  }

  @Post()
  savePosts(): string {
    return 'post save complete!';
  }
}
