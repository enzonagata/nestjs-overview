import { IsNotEmpty } from 'class-validator';

export class AlalunoCEPDTO {
  @IsNotEmpty()
  cep: string;
}
