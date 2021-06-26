import { ArgsType, Field } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@ArgsType()
export class SkuArgs {
    @Field()
    @IsString()
    id: string;
}
