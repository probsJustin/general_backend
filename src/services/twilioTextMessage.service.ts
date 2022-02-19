import { ApiPropertyOptional, ApiProperty } from '@nestjs/swagger';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class TwilioTextMessage {
    static internalURL: string = 'twilio/text/send';
    static summary: string = 'Send a text message to a specific phone number based on a set of parameters';
    
      constructor(){
      }
      async get(){
          return true;
      }
      async post(){
          return true;
      }

}