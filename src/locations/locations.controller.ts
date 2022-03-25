import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { LocationsService } from './locations.service';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';

@Controller('locations')
export class LocationsController {
  constructor(private readonly locationsService: LocationsService) {}

  @Post()
  createLocation(@Body() createLocationDto: CreateLocationDto) {
    return this.locationsService.createLocatn(createLocationDto);
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
  removeLocationByName(@Param('locationName') id: string) {
    return this.locationsService.remove(+id);
  }

  @Post()
  calculateDistance(@Body() createLocationDto: CreateLocationDto) {
    return this.locationsService.createLocatn(createLocationDto);
  }
}
