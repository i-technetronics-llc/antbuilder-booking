import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('Bookings')
export class BookingsEntity {
    @PrimaryGeneratedColumn('uuid', {
        name: 'Id',
        primaryKeyConstraintName: 'pk_booking_id'
    })
    Id: string;

    
    @Column({
        name: 'FirstName',
        type: 'varchar',
        nullable: false,
        //unique: true,
        length: 64
    })
    FirstName: string;

    @Column({
        name: 'LastName',
        type: 'varchar',
        nullable: false,
        //unique: true,
        length: 64
    })
    LastName: string;

    @Column({
        name: 'Email',
        type: 'varchar',
        nullable: true,
        default: null
    })
    Email: string;

    @Column({
        name: 'Phone',
        type: 'varchar',
        nullable: false,
        //unique: true,
        length: 16
    })
    Phone: string;

    @Column({
        name: 'CompanyName',
        type: 'varchar',
        nullable: false,
        //unique: true,
        length: 64
    })
    CompanyName: string;

    @Column({
        name: 'WebsiteUrl',
        type: 'varchar',
        nullable: true,
        default: null,
        length: 64
    })
    WebsiteUrl: string;

    @Column({
        name: 'Industry',
        type: 'varchar',
        nullable: true,
        default: null,
        length: 64
    })
    Industry: string;

    @Column({
        name: 'Country',
        type: 'varchar',
        nullable: true,
        default: null,
        length: 64
    })
    CountryName: string;

    @Column({
        name: 'State',
        type: 'varchar',
        nullable: true,
        default: null,
        length: 64
    })
    State: string;

    @Column({
        nullable: true,
        type: 'int',
        default: 0,
    })
    EmployeeCount: number;

    @Column({
        name: 'ProjectTitle',
        type: 'varchar',
        nullable: true,
        default: null,
        length: 128
    })
    ProjectTitle: string;

    @Column({
        name: 'ProjectBudget',
        type: 'decimal',
        precision: 10,
        scale: 2,
        nullable: true,
        default: 0,
    })
    ProjectBudget: number;

    @Column({
        name: 'ProjectDescription',
        type: 'varchar',
        nullable: false,
        //unique: true,
        length: 2048
    })
    ProjectDescription: string;

    @Column({
        name: 'IsDeprecated',
        type: 'bool',
        nullable: false,
        default: false,
    })
    IsDeprecated: boolean;

    @Column({
        name: 'TimeZone',
        type: 'varchar',
        nullable: true,
        default: null,
        length: 128
    })
    TimeZone: string;

    @Column({
        name: 'ScheduleDate',
        type: 'timestamptz',
        nullable: true,
        default: null,
    })
    ScheduleDateTime: string;

    @Column({
        name: 'CreatedDate',
        type: 'timestamptz',
        nullable: true,
        default: new Date(),
    })
    CreatedDate: Date;
}
