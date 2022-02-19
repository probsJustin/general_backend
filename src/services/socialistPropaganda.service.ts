import { ApiPropertyOptional, ApiProperty } from '@nestjs/swagger';
import socialistContent from '../../assets/socialist_content.json';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class SocialistPropaganda{
    static internalURL: string = 'socialistPropaganda';
    static summary: string = 'Get a randomly generated socialist propaganda quote';

    constructor(){
    }


    async get():Promise<string>{
        try{
            return JSON.stringify(socialistContent);
        }catch(error){
            return error;
        }
    }

    async post(){
        return true;
    }
}