import { IsNotEmpty, IsOptional } from 'class-validator';

export class AlunoDTO {
  @IsNotEmpty()
  cpf: string;

  @IsNotEmpty()
  nome: string;

  @IsOptional()
  sobrenome?: string;
}
