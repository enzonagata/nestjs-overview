import { Controller, Get } from '@nestjs/common';

@Controller('aluno')
export class AlunoController {

    @Get()
    alunoGet() {
        return "Hello aluno!";
    }

    @Get('cadastro')
    alunoCadastro() {
        return "Cadastro de Aluno...";
    }

}
