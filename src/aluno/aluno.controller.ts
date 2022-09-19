import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';


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

    @Get('exception')
    alunoException() {
        throw new HttpException('Ocorreu um erro no aluno...', HttpStatus.INTERNAL_SERVER_ERROR);
    }

}
