import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Inject,
  Logger,
  NotFoundException,
  Param,
  Post,
  Query,
  UseGuards
} from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import {
  ApiBasicAuth,
  ApiBearerAuth,
  ApiBody,
  ApiExcludeEndpoint,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiResponse,
  ApiTags
} from '@nestjs/swagger';

import { NestCrawlerService } from 'nest-crawler';

import { AppService } from './app.service';
import { CatFactsRequest } from './services/catFactsRequest.service';
import { IPAddressInfoRequest } from './services/iPAddressInfoRequest.service';
import { SocialistPropaganda } from './services/socialistPropaganda.service';
import { MessageToExternalDatabase } from './services/messageToExternalDatabase.service';
import { MessageToInternalDatabase } from './services/messageToInternalDatabase.service';
import { InformationFromInternalDatabase } from './services/informationFromInternalDatabase.service';
import { InformationToInternalDatabase } from './services/informationToInternalDatabase.service';
import { TwilioTextMessage } from './services/twilioTextMessage.service';

@ApiTags('General backend api playground')
@Controller()
export class AppController {

  constructor(
    private readonly appService: AppService,
    private readonly httpService: HttpService,
    private readonly catFactsRequest: CatFactsRequest,
    private readonly iPAddressInfoRequest: IPAddressInfoRequest,
    private readonly socialistPropaganda: SocialistPropaganda,
    private readonly messageToExternalDatabase: MessageToExternalDatabase,
    private readonly messageToInternalDatabase: MessageToInternalDatabase,
    private readonly informationToInternalDatabase: InformationToInternalDatabase,
    private readonly informationFromInternalDatabase: InformationFromInternalDatabase,
    private readonly twilioTextMessage: TwilioTextMessage,
    ) {}

  @Get(CatFactsRequest.internalURL)
  @ApiOperation({ summary: CatFactsRequest.summary})
  async processCatFactsRequest(){
    return this.catFactsRequest.get();
  }

  @Get(SocialistPropaganda.internalURL)
  @ApiOperation({ summary: SocialistPropaganda.summary})
  async processSocialistPropaganda(){
     return this.socialistPropaganda.get();
  }

  @Post(IPAddressInfoRequest.internalURL)
  @ApiOperation({ summary: IPAddressInfoRequest.summary })
  async processIPAddressInfoRequest(){
    return this.iPAddressInfoRequest.post();
  }

  @Post(MessageToExternalDatabase.internalURL)
  @ApiOperation({ summary: MessageToExternalDatabase.summary })
  async processMessageToExternalDatabase(){
    return this.messageToExternalDatabase.post();
  }

  @Post(MessageToInternalDatabase.internalURL)
  @ApiOperation({ summary: MessageToInternalDatabase.summary })
  async processMessageToInternalDatabase(){
     this.messageToInternalDatabase.post();
  }

  @Post(InformationToInternalDatabase.internalURL)
  @ApiOperation({ summary: InformationToInternalDatabase.summary})
  async processInformationToInternalDatabase(){
    return this.informationToInternalDatabase.post();
  }

  @Post(InformationFromInternalDatabase.internalURL)
  @ApiOperation({ summary: InformationFromInternalDatabase.summary })
  async processInformationFromInternalDatabase(){
  return this.informationFromInternalDatabase.post();
  }

  @Post(TwilioTextMessage.internalURL)
  @ApiOperation({ summary: TwilioTextMessage.summary})
  async processTwilioTextMessage(){
    return this.twilioTextMessage.post();
  }

  /*
  // delete either get or post and replace 'aaa' with the service name.
  example payload
  @Post(this.aaa.internalURL)
  @Get(this.aaa.internalURL)
  @ApiOperation({ summary: this.aaa.summary})
  async aaa(){
    return this.aaa.post();
    return this.aaa.get();
  }
  */

}

  