import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class PersonalDataDto {
    @ApiProperty({ required: true, description: 'First name', default: 'John', minLength: 2, maxLength: 128 })
    @IsString({ always: true, message: 'First name is required' }) 
    @IsNotEmpty({ always: true, message: 'First name must be of character type' })
    firstName: string;

    @ApiProperty({ required: true, description: 'Last name', default: 'Doe', minLength: 2, maxLength: 128 })
    @IsString({ always: true, message: 'Last name is required' }) 
    @IsNotEmpty({ always: true, message: 'Last name must be of character type' })
    lastName: string;

    @ApiProperty({ required: true, description: 'Email address', default: 'john-does@mail.com', minLength: 2, maxLength: 128 })
    @IsString({ always: true, message: 'Email address name is required' }) 
    @IsNotEmpty({ always: true, message: 'Email name must be of character type' })
    @IsEmail()
    email: string;

    @ApiProperty({ required: true, description: 'Phone number', default: '+2348144488577' })
    @IsString({ always: true, message: 'Phone number is required' }) 
    @IsNotEmpty({ always: true, message: 'Phone number must be of character type' })
    @IsOptional()
    phone?: string;
}