import { Model } from 'mongoose';
import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Location, LocationDocument } from 'src/schemas/location.schema';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';


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

  update(LocationName: string, updateLocationDto: UpdateLocationDto) {
    return this.locationModel.updateOne({ LocationName }, {$set: {...updateLocationDto }});
  }

  remove(id: number) {
    return `This action removes a #${id} location`;
  }

  async calculateDistance(createLocationDto: CreateLocationDto): Promise<number> {
    const val = this.greatCircleCal(1, 2, 3, 4, 3.5);

    return val;
  }

  greatCircleCal(log1:number, log2:number, lat1:number, lat2:number, radius:number) {
    

    const angleValue = (Math.cos(log1) * Math.cos(log2) * Math.cos(lat1 - lat2) + Math.sin(log1) * Math.sin(log2));

    //cos-1(coslog1 * coslog2 * cos(lat1-lat2) + sin(log1) * sin(log2))
    // θ = cos-1[ (adjacent side) / (hypotenuse)]
    let distanceVal = radius * (1/Math.cos(angleValue));

    return distanceVal;
  }
}
