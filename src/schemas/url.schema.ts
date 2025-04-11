import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UrlDocument = HydratedDocument<Url>;

@Schema()
export class Url {
  @Prop({ required: true })
  orig: string;

  @Prop({ required: true })
  shortened: string;

  @Prop({ default: 0 })
  accessed: number;
}

export const UrlSchema = SchemaFactory.createForClass(Url);
