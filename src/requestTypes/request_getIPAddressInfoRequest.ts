import { ApiPropertyOptional, ApiProperty } from '@nestjs/swagger';


export class getIPAddressInfoRequest{
    static internal_url: string = 'ipinfo';
    static summary: string = 'Get information for specific IP Addresses'; 

    constructor(){
    }
}