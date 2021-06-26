import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Product } from 'src/products/entities/product.entity';

@ObjectType()
@Schema()
export class Sku extends Document {
    @Field(() => ID)
    _id = Types.ObjectId;

    @Field()
    @Prop()
    name: string;

    @Field()
    @Prop()
    color: string;

    @Field()
    @Prop()
    size: string;

    @Field(() => Product)
    @Prop({ type: Types.ObjectId, ref: 'Product' })
    product: Product;
}

export const SkuSchema = SchemaFactory.createForClass(Sku);
