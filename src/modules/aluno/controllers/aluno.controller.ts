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
import { type } from 'os';
import { ResponseInterceptor } from 'src/interceptors/response.interceptor';
import { AlunoService } from './services/aluno.service';
//import { AuthGuard } from 'src/auth/auth.guard';
import { AlunoDTO } from './dto/aluno.dto';
import { AlunoCEPDTO } from './dto/alunoCEP.dto';

export class Type {
  type: string;
}

//@UseGuards(AuthGuard)
@UseInterceptors(ResponseInterceptor)
@Controller('aluno')
export class AlunoController {
  constructor(private readonly alunoService: AlunoService) {}

  @Get()
  async alunoGet() {
    return 'Hello aluno..';
  }

  @Get('cep')
  async alunoCepBuscar(@Body() payload: AlunoCEPDTO) {
    return this.alunoService.buscaCEP(payload).then((res) => res);
  }

  @Get('loop')
  async alunoCep(@Body() payload: Type) {
    return this.alunoService.loop(payload);
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
