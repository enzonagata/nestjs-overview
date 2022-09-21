import { HttpService } from '@nestjs/axios';
import {
  Controller,
  Get,
  Post,
  Body,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { ResponseInterceptor } from 'src/interceptors/response.interceptor';
//import { AuthGuard } from 'src/auth/auth.guard';
import { AlunoDTO } from './dto/aluno.dto';
import { firstValueFrom } from 'rxjs';

//@UseGuards(AuthGuard)
@UseInterceptors(ResponseInterceptor)
@Controller('aluno')
export class AlunoController {
  constructor(private readonly httpService: HttpService) {}

  @Get()
  async alunoGet() {
    return 'Hello aluno..';
  }

  @Get('cep')
  async alunoCep() {
    return await new Promise((callback) => {
      callback('a');
    });
  }

  @Post()
  alunoSalvar(@Body() payload: AlunoDTO) {
    console.log(payload);
    return 'Aluno salvar...';
  }

  @Get('cadastro')
  alunoCadastro() {
    return 'Cadastro de Aluno...';
  }

  @Get('exception')
  alunoException() {
    throw new HttpException(
      'Ocorreu um erro no aluno...',
      HttpStatus.INTERNAL_SERVER_ERROR,
    );
  }

  @Get(':id')
  parseInt(@Param('id', ParseIntPipe) id: number) {
    console.log(typeof id);
    return;
  }
}
