import { CompanyDataDto } from "@booking/dto/company-data.dto";
import { CreateBookingDto } from "@booking/dto/create-booking.dto";
import { PersonalDataDto } from "@booking/dto/personal-data.dto";
import { ProjectDataDto } from "@booking/dto/project-data.dto";
import { BookingResponseDto, BookingResponseFlatDto } from "@booking/dto/reponse/booking-response.dto";
import { BookingsEntity } from "@booking/entities/booking.entity";
import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";

@Injectable()
export class BookingsRepository extends Repository<BookingsEntity> {
  constructor(private dataSource: DataSource) {
    super(BookingsEntity, dataSource.createEntityManager());
  }

  async getById(id: string) {
    return this.findOne({ where: { Id: id } });
  }
}

export class BookingsMapper{

    public static toDto(bookingEntity: BookingsEntity): BookingResponseDto{
        const personDto = new PersonalDataDto();
        const companyDto = new CompanyDataDto();
        const projectDto = new ProjectDataDto();
        const bookingResponseDto = new BookingResponseDto();

        personDto.firstName = bookingEntity.FirstName;
        personDto.lastName = bookingEntity.LastName;
        personDto.phone = bookingEntity.Phone;
        personDto.email = bookingEntity.Email;

        companyDto.companyName = bookingEntity.CompanyName;
        companyDto.countryName = bookingEntity.CountryName;
        companyDto.employeeCount = bookingEntity.EmployeeCount;
        companyDto.industry = bookingEntity.Industry;
        companyDto.state = bookingEntity.State;
        companyDto.websiteUrl = bookingEntity.WebsiteUrl;

        projectDto.projectDescription = bookingEntity.ProjectDescription;
        projectDto.projectBudget = bookingEntity.ProjectBudget;
        projectDto.projectTitle = bookingEntity.ProjectTitle;

        bookingResponseDto.personalData = personDto;
        bookingResponseDto.companyData = companyDto;
        bookingResponseDto.projectData = projectDto;

        return bookingResponseDto
    }

    public static toDtos(bookingEntity: BookingsEntity[]): BookingResponseDto{
        const personDto = new PersonalDataDto();
        const companyDto = new CompanyDataDto();
        const projectDto = new ProjectDataDto();
        const bookingResponseDto = new BookingResponseDto();

        bookingEntity.map((booking) => {

            personDto.firstName = booking.FirstName;
            personDto.lastName = booking.LastName;
            personDto.phone = booking.Phone;
            personDto.email = booking.Email;

            companyDto.companyName = booking.CompanyName;
            companyDto.countryName = booking.CountryName;
            companyDto.employeeCount = booking.EmployeeCount;
            companyDto.industry = booking.Industry;
            companyDto.state = booking.State;
            companyDto.websiteUrl = booking.WebsiteUrl;

            projectDto.projectDescription = booking.ProjectDescription;
            projectDto.projectBudget = booking.ProjectBudget;
            projectDto.projectTitle = booking.ProjectTitle;

        })

        bookingResponseDto.personalData = personDto;
        bookingResponseDto.companyData = companyDto;
        bookingResponseDto.projectData = projectDto;

        return bookingResponseDto
    }

    public static toDtoFlat(bookingEntity: BookingsEntity): BookingResponseFlatDto{
        const dto = new BookingResponseFlatDto();
        dto.firstName = bookingEntity.FirstName;
        dto.lastName = bookingEntity.LastName;
        dto.phone = bookingEntity.Phone;
        dto.email = bookingEntity.Email;
        dto.companyName = bookingEntity.CompanyName;
        dto.countryName = bookingEntity.CountryName;
        dto.employeeCount = bookingEntity.EmployeeCount;
        dto.industry = bookingEntity.Industry;
        dto.state = bookingEntity.State;
        dto.websiteUrl = bookingEntity.WebsiteUrl;
        dto.projectDescription = bookingEntity.ProjectDescription;
        dto.projectBudget = bookingEntity.ProjectBudget;
        dto.projectTitle = bookingEntity.ProjectTitle;

        return dto;
    }

    public static toEntity(bookingDto: CreateBookingDto): BookingsEntity{
        const entity = new BookingsEntity();

        entity.FirstName = bookingDto.personalData.firstName;
        entity.LastName = bookingDto.personalData.lastName;
        entity.Phone = bookingDto.personalData.phone;
        entity.Email = bookingDto.personalData.email
        entity.CompanyName = bookingDto.companyData.companyName;
        entity.CountryName = bookingDto.companyData.countryName;
        entity.EmployeeCount = bookingDto.companyData.employeeCount;
        entity.Industry = bookingDto.companyData.industry;
        entity.State = bookingDto.companyData.state;
        entity.WebsiteUrl = bookingDto.companyData.websiteUrl;
        entity.ProjectDescription = bookingDto.projectData.projectDescription;
        entity.ProjectBudget = bookingDto.projectData.projectBudget;
        entity.ProjectTitle = bookingDto.projectData.projectTitle;

        return entity;
    }
}

