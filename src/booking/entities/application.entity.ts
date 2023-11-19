import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('Applications')
export class ApplicationEntity {
    @PrimaryGeneratedColumn('uuid', {
        name: 'Id',
        primaryKeyConstraintName: 'pk_application_id'
    })
    Id: string;

    @Column({
        name: 'Name',
        type: 'varchar',
        nullable: false,
        unique: true,
        length: 64
    })
    Name: string;

    @Column({
        name: 'Description',
        type: 'varchar',
        nullable: true,
        length: 64
    })
    Description: string;

    @Column({
        name: 'ApiPubKey',
        type: 'varchar',
        nullable: true,
        length: 64
    })
    ApiPubKey: string;

    @Column({
        name: 'CreatedDate',
        type: 'timestamptz',
        nullable: true,
        default: null,
    })
    CreatedDate: string;
}
