import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus } from '@nestjs/common';
import { BookingsService } from './booking.service';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { BookingResponseDto } from './dto/reponse/booking-response.dto';

@ApiTags('Bookings Manager')
@Controller({
  path: 'bookings',
  version: '1'
})
export class BookingsController {
  constructor(private readonly bookingService: BookingsService) {}

  @ApiOperation({
    summary: 'Create a new booking entry containing, personal information, company information and project information'
  })
  @Post('create')
  async create(@Body() createBookingDto: CreateBookingDto): Promise<any> {
    return {
      status: HttpStatus.FOUND,
      message: 'Service available!!!',
      response: await this.bookingService.createBooking(createBookingDto)
    }
  }

  @ApiOperation({
    summary: 'Get all booking records'
  })
  @Get()
  async findAll(skip: number, take: number): Promise<any> {
    return {
      status: HttpStatus.FOUND,
      message: 'Service available!!!',
      response: await this.bookingService.findAll(skip, take)
    }
  }

  @ApiOperation({
    summary: 'Get a single booking record'
  })
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<any> {
    return {
      status: HttpStatus.FOUND,
      message: 'Service available!!!',
      response: await this.bookingService.findOne(id)
    }
  }

  @ApiOperation({
    summary: 'Update a single booking record with all corresponding details'
  })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBookingDto: UpdateBookingDto) {
    return this.bookingService.update(+id, updateBookingDto);
  }

  @ApiOperation({
    summary: 'Delete a single booking record'
  })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bookingService.remove(+id);
  }
}
