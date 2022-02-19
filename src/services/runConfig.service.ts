import { ApiPropertyOptional, ApiProperty } from '@nestjs/swagger';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class RunConfig{
    constructor(){
    }

    async runConfig(){
        return true;
    }
}