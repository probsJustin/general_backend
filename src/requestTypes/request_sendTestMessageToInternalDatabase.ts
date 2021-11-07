import { ApiPropertyOptional, ApiProperty } from '@nestjs/swagger';


export class sendTestMessageToInternalDatabase{
    static internal_url: string = 'database/internal/test';
    static summary: string = 'send a specific test message to the internal database to see if it is alive/available'; 

    @ApiPropertyOptional({
        name: 'connectionString', 
        description: 'The connection string for the external database we are going to connect to', 
        example: 'gfym'
    })
    connectionString?: string; 
    @ApiPropertyOptional({
        name: 'databaseUsername', 
        description: 'The username for the database that we are going to connect to, if left blank no username will be used',
        example: 'gfym'
    })
    databaseUsername?: string; 
    @ApiPropertyOptional({
        name: 'databasePassword', 
        description: 'The passwword for the database that we are going to connect to, if left blank no username will be used', 
        example: 'gfym'
    })
    databasePassword?: string; 
    @ApiPropertyOptional({
        name: 'connectionType', 
        description: 'The type of connection that we are going to make with the external database', 
        example: 'gfym'
    })
    connectionType?: string; 
    @ApiPropertyOptional({
        name: 'databaseSQL', 
        description: 'The SQL string that will be executed on the database', 
        example: 'gfym'
    })
    databaseSQL?: string; 

    constructor(){
    }
}