import { ApiPropertyOptional, ApiProperty } from '@nestjs/swagger';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class MessageToExternalDatabase{
    static internalURL: string = 'database/external/send';
    static summary: string = 'Send information to an external databse based on a set of parameters';

    constructor(){
    }
    async get(){
        return true;
    }
    async post(){
        return true;
    }
}