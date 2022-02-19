import { ApiPropertyOptional, ApiProperty } from '@nestjs/swagger';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class TestMessageToJenkins{
    static internalURL: string = 'jenkins/test';
    static summary: string = 'Send a test message to jenkins';

    constructor(){
    }
    async get(){
        return true;
    }
    async post(){
        return true;
    }
}