import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty, IsString } from "class-validator";

@InputType()
export class DeleteProductInput {
    @Field()
    @IsString()
    @IsNotEmpty()
    id: string
}