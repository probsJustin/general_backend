import { ApiPropertyOptional, ApiProperty } from '@nestjs/swagger';

export class sendTwilioTextMessage {
    static internal_url: string = 'twilio/text/send';
    static summary: string = 'Send a text message to a specific phone number based on a set of parameters';
    
    @ApiProperty({
        name: 'from', 
        description: 'The phone number that we want to send the message from', 
        example: 'gfym'
    })
    from?: string; 

    @ApiProperty({
        name: 'to', 
        description: 'The phone number that we want to send the message to', 
        example: 'gfym'
    })
    to?: string; 

    @ApiProperty({
        name: 'message', 
        description: 'The message that we are going to send', 
        example: 'gfym'
    })
    message?: string; 

    @ApiProperty({
        name: 'twilioToken',
        description: 'Api token for twilio that will be used to execute this request', 
        example: 'gfym'
    })
    twilioToken?: string; 


}