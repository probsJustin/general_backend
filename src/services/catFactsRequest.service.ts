import { ApiPropertyOptional, ApiProperty } from '@nestjs/swagger';
import { Inject, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { inspect } from 'util';

@Injectable()
export class CatFactsRequest{
    static internalURL: string = 'catfacts';
    static summary: string = 'Get a random catfact';
    static baseUrl = "https://catfact.ninja/";
    constructor(
        private readonly httpService: HttpService
    ){}

    // gets a single catfact from the catfacts api:
    // https://catfact.ninja/
    async get(){
        const requestUrl = CatFactsRequest.baseUrl + `fact`
        try{
            const response = await this.httpService.get(requestUrl).toPromise();
            return response.data;
        } catch(error){
            return { status: 500, message: error };
        }
    }
}