
import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';


export type LocationDocument = Location & Document;

@Schema()
export class Location {
    @Prop()
    id:number;
    @Prop()
    LocationName: string;
    @Prop()
    Description: string;
    @Prop()
    Website: string;
    @Prop()
    Phone: string;
    @Prop()
    ContactPerson: string;
    @Prop()
    Latitude: number;
    @Prop()
    Longitude: number;
    
    
}

export const LocationSchema = SchemaFactory.createForClass(Location);