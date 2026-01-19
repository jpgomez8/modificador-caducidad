import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'usuarios' })
export class User extends Document {
  @Prop({})
  nombre: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({
    type: Date,
    default: Date.now,
  })
  fechaCaducidadPassword: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
