import { Field, InputType, PartialType } from "@nestjs/graphql";
import { IsNotEmpty, IsString } from "class-validator";
import { CreateProductInput } from "./create-product.inputt";

@InputType()
export class UpdateProductInput extends PartialType(CreateProductInput) {
    @Field()
    @IsString()
    @IsNotEmpty()
    id: string
}
