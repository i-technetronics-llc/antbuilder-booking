import { ApiProperty } from "@nestjs/swagger";
import { ValidateNested } from "class-validator";
import { PersonalDataDto } from "./personal-data.dto";
import { Type } from "class-transformer";
import { CompanyDataDto } from "./company-data.dto";
import { ProjectDataDto } from "./project-data.dto";

export class CreateBookingDto {

    @ApiProperty({ name: 'personalData', type: PersonalDataDto })
    @ValidateNested({ each: false, message: 'Personal information is require during booking' })
    @Type(() => PersonalDataDto)
    personalData: PersonalDataDto;

    @ApiProperty({ name: 'companyData', type: CompanyDataDto })
    @ValidateNested({ each: false, message: 'Company information is require during booking' })
    @Type(() => CompanyDataDto)
    companyData: CompanyDataDto;

    @ApiProperty({ name: 'projectData', type: ProjectDataDto })
    @ValidateNested({ each: false, message: 'Project information is require during booking' })
    @Type(() => ProjectDataDto)
    projectData: ProjectDataDto;

}
 