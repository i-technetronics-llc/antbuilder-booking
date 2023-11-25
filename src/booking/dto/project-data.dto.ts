import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString, IsUrl } from "class-validator";

export class ProjectDataDto {
    @ApiProperty({ required: true, description: 'The name of the project', default: 'Ride hauling app' })
    @IsString() @IsNotEmpty()
    projectTitle: string;

    @ApiProperty({ required: true, description: 'Project budget', default: 0.0 })
    @IsNumber() @IsNotEmpty()
    projectBudget: number;

    @ApiProperty({ required: true, description: 'The name of the project', default: 'Ride hauling app' })
    @IsString() @IsNotEmpty()
    projectDescription: string;
}