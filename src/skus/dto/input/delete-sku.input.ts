import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class DeleteSkuInput {
    @Field()
    @IsString()
    @IsNotEmpty()
    id: string;
}
