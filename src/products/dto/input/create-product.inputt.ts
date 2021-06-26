import { Field, InputType } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
export class CreateProductInput {
    @Field()
    @IsString()
    name: string;

    @Field()
    @IsString()
    style: string;

    @Field()
    @IsString()
    department: string;

    @Field()
    @IsString()
    division: string;

    @Field()
    @IsString()
    class: string;
}
