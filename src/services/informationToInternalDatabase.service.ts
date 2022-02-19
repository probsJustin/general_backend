import { ApiPropertyOptional, ApiProperty } from '@nestjs/swagger';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class InformationToInternalDatabase{
    static internalURL: string = 'database/internal/send';
    static summary: string = 'Send specific information to the internal database based on a specific set of parameters';

    constructor(){
    }
    async get(){
        return true;
    }
    async post(){
        return true;
    }
}