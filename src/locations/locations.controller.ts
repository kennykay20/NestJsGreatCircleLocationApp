import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { LocationsService } from './locations.service';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';
import { Coordinates } from './entities/coordinates.dto';

@Controller('locations')
export class LocationsController {
  constructor(private readonly locationsService: LocationsService) {}

  @Post()
  createLocation(@Body() createLocationDto: CreateLocationDto) {
    return this.locationsService.createLocatn(createLocationDto);
  }

  @Get('calculateDistance')
  calculateDistance(@Body() cordinatedDto: Coordinates) {
    return this.locationsService.calculateDistance(cordinatedDto);
  }

  @Get()
  findAllLocations() {
    return this.locationsService.findAllLocation();
  }

  @Get(':locationName')
  findOneLocation(@Param('locationName') LocationName: string) {
    return this.locationsService.findOne(LocationName);
  }

  @Put(':location')
  updateLocation(@Param('location') LocationName: string, @Body() updateLocationDto: UpdateLocationDto) {
    return this.locationsService.update(LocationName, updateLocationDto);
  }

  @Delete(':locationName')
  removeLocationByName(@Param('locationName') LocationName: string) {
    return this.locationsService.remove(LocationName);
  }
}
