import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@ObjectType()
@Schema()
export class Product extends Document {
    @Field(() => ID)
    _id: Types.ObjectId;

    @Field()
    @Prop()
    name: string;

    @Field()
    @Prop()
    style: string;

    @Field()
    @Prop()
    department: string;

    @Field()
    @Prop()
    division: string;

    @Field()
    @Prop()
    class: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
