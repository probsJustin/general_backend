
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatFactsRequest } from './services/catFactsRequest.service';
import { IPAddressInfoRequest } from './services/iPAddressInfoRequest.service';
import { SocialistPropaganda } from './services/socialistPropaganda.service';
import { MessageToExternalDatabase } from './services/messageToExternalDatabase.service';
import { MessageToInternalDatabase } from './services/messageToInternalDatabase.service';
import { InformationToInternalDatabase } from './services/informationToInternalDatabase.service';
import { InformationFromInternalDatabase } from './services/informationFromInternalDatabase.service';
import { TwilioTextMessage } from './services/twilioTextMessage.service';

import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { NestCrawlerModule } from 'nest-crawler';


@Module({
  imports: [
    HttpModule, 
    NestCrawlerModule
   ],
  controllers: [AppController],
  providers: [
    AppService,
    CatFactsRequest,
    IPAddressInfoRequest,
    SocialistPropaganda,
    MessageToExternalDatabase,
    MessageToInternalDatabase,
    InformationToInternalDatabase,
    InformationFromInternalDatabase,
    TwilioTextMessage
    ],
  exports: []
})
export class AppModule {}
