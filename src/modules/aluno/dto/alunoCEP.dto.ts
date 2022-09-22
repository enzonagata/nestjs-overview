import { IsNotEmpty } from 'class-validator';

export class AlunoCEPDTO {
  @IsNotEmpty()
  cep: string;
}
