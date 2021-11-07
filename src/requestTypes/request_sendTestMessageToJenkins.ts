import { ApiPropertyOptional, ApiProperty } from '@nestjs/swagger';


export class sendTestMessageToJenkins{
    static internal_url: string = 'jenkins/test';
    static summary: string = 'Send a test message to jenkins'; 
    constructor(){
    }
}