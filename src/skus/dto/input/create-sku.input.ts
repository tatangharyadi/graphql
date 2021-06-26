import { Field, InputType } from '@nestjs/graphql';
import { IsOptional, IsString } from 'class-validator';

@InputType()
export class CreateSkuInput {
    @Field()
    @IsString()
    name: string;

    @Field()
    @IsString()
    @IsOptional()
    color?: string;

    @Field()
    @IsString()
    @IsOptional()
    size?: string;

    @Field()
    @IsString()
    product: string;
}
