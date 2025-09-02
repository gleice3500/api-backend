import { IsString,IsNumber,IsOptional,Min, isNumber } from "class-validator";

export class updateProductDto{
    @IsString()
    @IsOptional()
    name?: string;

    @IsNumber()
    @Min(0)
    @IsOptional()
    price?: number;
}