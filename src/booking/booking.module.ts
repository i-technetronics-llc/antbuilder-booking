import { Module } from '@nestjs/common';
import { BookingsService } from './booking.service';
import { BookingsController } from './booking.controller';
import { Repository } from 'typeorm';
import { BookingsRepository } from './mapper/booking.mapping';

@Module({
  imports: [],
  controllers: [BookingsController],
  providers: [BookingsService, BookingsRepository],
})
export class BookingModule {}
