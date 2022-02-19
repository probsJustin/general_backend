import { ApiPropertyOptional, ApiProperty } from '@nestjs/swagger';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class IPAddressInfoRequest{
    static internalURL: string = 'ipinfo';
    static summary: string = 'Get information for specific IP Addresses';

        constructor(){
        }
        async get(){
            return true;
        }
        async post(){
            return true;
        }
}