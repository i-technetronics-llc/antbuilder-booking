import { ApiProperty } from "@nestjs/swagger";
import { PersonalDataDto } from "../personal-data.dto";
import { CompanyDataDto } from "../company-data.dto";
import { ProjectDataDto } from "../project-data.dto";

export class BookingResponseDto{

    @ApiProperty()
    bookingId: string;
    
    @ApiProperty()
    createdDate: Date;

    @ApiProperty()
    personalData: PersonalDataDto;

    @ApiProperty()
    companyData: CompanyDataDto;

    @ApiProperty()
    projectData: ProjectDataDto;

}

export class BookingResponseWithRecordCountDto{

    @ApiProperty()
    bookingId: string;
    
    @ApiProperty()
    createdDate: Date;

    @ApiProperty()
    totalRecords: number;

    @ApiProperty()
    personalData: PersonalDataDto;

    @ApiProperty()
    companyData: CompanyDataDto;

    @ApiProperty()
    projectData: ProjectDataDto;

}

export class BookingResponseFlatDto{

    @ApiProperty()
    bookingId: string;
    
    @ApiProperty()
    createdDate: Date;

    @ApiProperty()    
    companyName: string;

    @ApiProperty()    
    firstName: string;

    @ApiProperty()    
    lastName: string;

    @ApiProperty()
    email: string;

    @ApiProperty()
    phone: string;

    @ApiProperty()
    websiteUrl: string;

    @ApiProperty()
    industry: string;

    @ApiProperty()    
    countryName: string;

    @ApiProperty()    
    state: string;

    @ApiProperty()
    employeeCount?: number = 0;

    @ApiProperty()    
    projectTitle: string;

    @ApiProperty()
    projectBudget: number;

    @ApiProperty()    
    projectDescription: string;

}