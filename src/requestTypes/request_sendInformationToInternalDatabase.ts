import { ApiPropertyOptional, ApiProperty } from '@nestjs/swagger';


export class sendInformationToInternalDatabase{
    static internal_url: string = 'database/internal/send';
    static summary: string = 'Send specific information to the internal database based on a specific set of parameters'; 
    
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