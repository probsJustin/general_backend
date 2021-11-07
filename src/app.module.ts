import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpModule } from '@nestjs/axios';
import { NestCrawlerModule } from 'nest-crawler';

@Module({
  imports: [
    HttpModule, 
    NestCrawlerModule
   ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
