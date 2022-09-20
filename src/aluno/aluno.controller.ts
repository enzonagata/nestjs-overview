import { Controller, Get, Post, Body, HttpException, HttpStatus, Param, ParseIntPipe, UseGuards } from '@nestjs/common';
//import { AuthGuard } from 'src/auth/auth.guard';
import { AlunoDTO } from './dto/aluno.dto';


//@UseGuards(AuthGuard)
@Controller('aluno')
export class AlunoController {


    @Get()
    alunoGet() {
        return "Hello aluno!";
    }

    @Post()
    alunoSalvar(@Body() payload: AlunoDTO) {
        console.log(payload);
        return "Aluno salvar...";
    }

    @Get('cadastro')
    alunoCadastro() {
        return "Cadastro de Aluno...";
    }

    @Get('exception')
    alunoException() {
        throw new HttpException('Ocorreu um erro no aluno...', HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @Get(':id')
    parseInt(@Param('id', ParseIntPipe) id: number) {
        console.log(typeof id);
        return;
    }

}
