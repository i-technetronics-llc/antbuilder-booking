import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString, IsUrl } from "class-validator";

export class CompanyDataDto {
    @ApiProperty({ required: true, description: 'Company name', default: 'John Doe LLC', minLength: 2, maxLength: 128 })
    @IsString() @IsNotEmpty()
    companyName: string;

    @ApiProperty({ required: true, description: 'Company website url', default: 'https://www.john-doe.com.us' })
    @IsString() @IsNotEmpty() @IsUrl()
    @IsOptional()
    websiteUrl: string;

    @ApiProperty({ required: true, description: 'Company industry', default: 'Agro-manufacturing' })
    @IsString() @IsNotEmpty()
    @IsOptional()
    industry: string;

    @ApiProperty({ required: true, description: 'Country of business', default: 'United States' })
    @IsString() @IsNotEmpty()
    countryName: string;

    @ApiProperty({ required: true, description: 'State/Province of business', default: 'Texas, California' })
    @IsString() @IsNotEmpty()
    state: string;

    @ApiProperty({ required: true, description: 'Total employee count', default: 0 })
    @IsNumber()
    employeeCount?: number = 0;
}