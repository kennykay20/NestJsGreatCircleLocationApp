import { Model } from 'mongoose';
import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Location, LocationDocument } from 'src/schemas/location.schema';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';
import { Coordinates } from './entities/coordinates.dto';


@Injectable()
export class LocationsService {

  constructor(
    @InjectModel(Location.name) private locationModel: Model<LocationDocument>, 
  ){}


  // create(createLocationDto: CreateLocationDto) {
  //   return 'This action adds a new location';
  // }

  async createLocatn(createLocationDto: CreateLocationDto): Promise<Location> {
    if(createLocationDto != null){
      const createdLocation = new this.locationModel(createLocationDto);
      return createdLocation.save();
    }
    throw new BadRequestException();
    
  }

  async findAllLocation(): Promise<Location[]> {
    return this.locationModel.find().exec();
  }

  async findOne(LocationName: string): Promise<Location> {
    return this.locationModel.findOne({ LocationName }).exec();
  }

  async update(LocationName: string, updateLocationDto: UpdateLocationDto) {
    return this.locationModel.updateOne({ LocationName }, {$set: {...updateLocationDto }});
  }

  async remove(LocationName: string) {
    return this.locationModel.deleteOne({ LocationName });
  }

  async calculateDistance(cordinatesDto: Coordinates): Promise<number> {
    if(isNaN(cordinatesDto.latitudeA)){
      throw new BadRequestException(); 
    }
    if(isNaN(cordinatesDto.latitudeB)){
      throw new BadRequestException(); 
    }
    if(isNaN(cordinatesDto.longitudeA)){
      throw new BadRequestException(); 
    }
    if(isNaN(cordinatesDto.longitudeB)){
      throw new BadRequestException(); 
    }
    if(isNaN(cordinatesDto.radius)){
      throw new BadRequestException(); 
    }

    //radius in KiloMeter
    const radius = cordinatesDto.radius;

    //convert degree to radian
    const radianLatA = this.degree_to_Radians(Number(cordinatesDto.latitudeA));
    const radianLatB = this.degree_to_Radians(Number(cordinatesDto.latitudeB));
    const radianLongA = this.degree_to_Radians(Number(cordinatesDto.longitudeA));
    const radianLongB = this.degree_to_Radians(Number(cordinatesDto.longitudeB));

    const totalDistance = this.greatCircleDistance(+radianLatA, +radianLatB, +radianLongA, +radianLongB, radius);

    return Number(totalDistance);
  }

  greatCircleDistance( lat1:number, lat2:number, log1:number, log2:number, radius:number){
    
    //cos-1(coslat1 * coslat2 * cos(log1-log2) + sin(lat1) * sin(lat2));
    const angleValue = (Math.cos(lat1) * Math.cos(lat2) * Math.cos(log1 - log2) + Math.sin(lat1) * Math.sin(lat2));

    // θ = cos-1[ (adjacent side) / (hypotenuse)]
    // 
    let distanceVal = radius * (1/Math.cos(angleValue));

    return distanceVal.toFixed(2);
  }

  degree_to_Radians(value) {
    const pi = Math.PI;
    const radian = (pi / 180) * value;
    return radian.toFixed(2);
  }
}
