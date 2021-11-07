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
  ApiBearerAuth,
  ApiBody,
  ApiExcludeEndpoint,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiResponse,
  ApiTags
} from '@nestjs/swagger';
import { AppService } from './app.service';
import { NestCrawlerService } from 'nest-crawler';
import { 
  getCatFactsRequest, 
  getIPAddressInfoRequest, 
  sendMessageToExternalDatabase, 
  sendTestMessageToInternalDatabase,
  sendInformationToInternalDatabase,
  getInformationFromInternalDatabase,
  sendTwilioTextMessage,
  sendTestMessageToJenkins
 } from './requestTypes';

@ApiTags('Api Endpoints')

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly httpService: HttpService,
    private readonly nestCrawlerService: NestCrawlerService 
    ) {

  }


  @Post(getCatFactsRequest.internal_url)
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'created successfully'
  })
  @ApiOperation({ summary: 'Create Requsest to Cat Facts API'})
  @ApiBody({  })
  async processGetCatFactsRequest(@Body() getCatFactsRequest: getCatFactsRequest ){
    // https://catfact.ninja/

  }


  @Post(getIPAddressInfoRequest.internal_url)
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'created successfully'
  })
  @ApiParam({name: 'Ip-Address', description: 'The Ip address that we are getting the information for', example: '127.0.0.1'})
  @ApiOperation({ summary: getIPAddressInfoRequest.summary })
  @ApiBody({  })
  async getIPAddressInfoRequest(@Body() getIPAddressInfoRequest: getIPAddressInfoRequest ){
    // ip-api.com
  }


  @Post(sendMessageToExternalDatabase.internal_url)
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'created successfully'
  })

  @ApiOperation({ summary: sendMessageToExternalDatabase.summary })
  @ApiBody({ type: sendMessageToExternalDatabase })
  async sendMessageToExternalDatabase(@Body() sendMessageToExternalDatabase: sendMessageToExternalDatabase){
    // twilio
  }


  @Post(sendTestMessageToInternalDatabase.internal_url)
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'created successfully'
  })
  @ApiOperation({ summary: sendTestMessageToInternalDatabase.summary })
  @ApiBody({ type: sendTestMessageToInternalDatabase })
  async sendTestMessageToInternalDatabase(@Body() sendTestMessageToInternalDatabase: sendTestMessageToInternalDatabase ){
    // internal database
  }


  @Post(sendInformationToInternalDatabase.internal_url)
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'created successfully'
  })
  @ApiOperation({ summary: sendInformationToInternalDatabase.summary})
  @ApiBody({ type:sendInformationToInternalDatabase })
  async sendInformationToInternalDatabase(@Body() sendInformationToInternalDatabase: sendInformationToInternalDatabase){
    // twilio
  }


  @Post(getInformationFromInternalDatabase.internal_url)
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'created successfully'
  })
  @ApiOperation({ summary: getInformationFromInternalDatabase.summary })
  @ApiBody({ type: getInformationFromInternalDatabase })
  async getInformationFromInternalDatabase(@Body() getInformationFromInternalDatabase: getInformationFromInternalDatabase ){
  }


  @Post(sendTwilioTextMessage.internal_url)
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'created successfully'
  })
  @ApiOperation({ summary: sendTwilioTextMessage.summary})
  @ApiBody({ type: sendTwilioTextMessage  })
  async sendTwilioTextMessage(@Body() sendTwilioTextMessage: sendTwilioTextMessage ){
    // twilio
  }


  @Post(sendTestMessageToJenkins.internal_url)
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'created successfully'
  })
  @ApiOperation({ summary: sendTestMessageToJenkins.summary})
  @ApiBody({ type: sendTestMessageToJenkins })
  async sendTestMessageToJenkins(@Body() sendTestMessageToJenkins: sendTestMessageToJenkins){
  }

}

  