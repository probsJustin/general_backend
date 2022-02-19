import { ApiPropertyOptional, ApiProperty } from '@nestjs/swagger';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class InformationFromInternalDatabase{
    static internalURL: string = 'database/internal/get';
    static summary: string = 'Select a set of data from the database based on a set of parameters';

        constructor(){

        }

        async get(){
            return true;
        }
        async post(){
            return true;
        }

}