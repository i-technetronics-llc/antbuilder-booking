import { Injectable } from '@nestjs/common';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { BookingsEntity } from './entities/booking.entity';
import { BookingResponseDto } from './dto/reponse/booking-response.dto';
import { BookingsMapper, BookingsRepository } from './mapper/booking.mapping';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class BookingsService {

  constructor(
    private readonly bookingRepository: BookingsRepository
  ) {}

  async findAll(skip: number, take: number): Promise<BookingResponseDto> {
    let [flattenBookingData, count] = await this.bookingRepository.createQueryBuilder('bookings')
    .where('booking.IsDeprecated = :IsDeprecated', { IsDeprecated: false })
    .skip(skip)
    .take(take)
    .getManyAndCount();

    return BookingsMapper.toDtos(flattenBookingData);
  }

  async findOne(id: string): Promise<BookingResponseDto> {
    return BookingsMapper.toDto(await this.bookingRepository.findOne({
      where:{ 
        Id: id
      }
    }));
  }

  async createBooking(bookingDto: CreateBookingDto): Promise<BookingResponseDto>{
    const flattenBookingData = BookingsMapper.toEntity(bookingDto);
    const newBookingEntity = await this.bookingRepository.save(flattenBookingData);
    const bookingResponse = BookingsMapper.toDto(newBookingEntity);
    return bookingResponse;
  }

  async update(id: number, updateBookingDto: UpdateBookingDto) {
    return `This action updates a #${id} booking`;
  }

  async remove(id: number) {
    return `This action removes a #${id} booking`;
  }
}
