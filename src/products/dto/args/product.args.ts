import { ArgsType, Field } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@ArgsType()
export class ProductArgs {
    @Field()
    @IsString()
    id: string;
}
