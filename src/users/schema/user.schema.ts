import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;
/*const Schema = mongoose.Schema;
export const UserSchema = new mongoose.Schema({
       name: String
});*/

@Schema()
       export class User {
              @Prop()
              name: string;

              @Prop()
              age: number;

              @Prop()
              profession: string;
       }

export const UserSchema = SchemaFactory.createForClass(User);