import { ApiPropertyOptional, ApiProperty } from '@nestjs/swagger';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class Discord{
    static internalURL: string = 'discord';
    static summary: string = 'discord api';

    constructor(){
    }

    async get(){
        return true;
    }
    async post(){
        return true;
    }
}