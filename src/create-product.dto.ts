import { IsString,IsNumber, IsNotEmpty,Min} from "class-validator";

export class createProductDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsNumber()
    @Min(0) // Preço não pode ser negativo 
    price: number;
}