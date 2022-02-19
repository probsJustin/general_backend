import { ApiPropertyOptional, ApiProperty } from '@nestjs/swagger';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class CatFactsRequest{
    static internalURL: string = 'catfacts';
    static summary: string = 'gets a random catfact';

    constructor(){
    }

    async get(){
        return true;
    }
    async post(){
        return true;
    }
}