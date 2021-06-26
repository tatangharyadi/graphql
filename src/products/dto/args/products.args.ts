import { ArgsType, Field, Int } from '@nestjs/graphql';
import { IsPositive } from 'class-validator';

@ArgsType()
export class ProductsArgs {
    @Field(() => Int)
    @IsPositive()
    limit: number;

    @Field(() => Int)
    @IsPositive()
    offset: number;
}
