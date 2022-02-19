import { ApiPropertyOptional, ApiProperty } from '@nestjs/swagger';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class MessageToInternalDatabase{
    static internalURL: string = 'database/internal/test';
    static summary: string = 'send a specific test message to the internal database to see if it is alive/available';

        constructor(){
        }
        async get(){
            return true;
        }
        async post(){
            return true;
        }
}