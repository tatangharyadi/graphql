import { Field, InputType, PartialType } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';
import { CreateSkuInput } from './create-sku.input';

@InputType()
export class UpdateSkuInput extends PartialType(CreateSkuInput) {
    @Field()
    @IsString()
    @IsNotEmpty()
    id: string;
}
