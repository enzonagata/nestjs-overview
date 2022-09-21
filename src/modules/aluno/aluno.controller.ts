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
import { AlunoService } from './aluno.service';
//import { AuthGuard } from 'src/auth/auth.guard';
import { AlunoDTO } from './dto/aluno.dto';
import { AlalunoCEPDTO } from './dto/alunoCEP.dto';

//@UseGuards(AuthGuard)
@UseInterceptors(ResponseInterceptor)
@Controller('aluno')
export class AlunoController {
  constructor(private readonly alunoService: AlunoService) {}

  @Get()
  async alunoGet() {
    return 'Hello aluno..';
  }

  @Get('cep-buscar')
  async alunoCepBuscar(@Body() payload: AlalunoCEPDTO) {
    return this.alunoService.buscaCEP(payload.cep).then((res) => res);
  }

  @Get('cep')
  async alunoCep(@Body() payload: AlalunoCEPDTO) {
    // let res;

    // res = await this.alunoService.buscaCEP(payload.cep);

    // res = this.alunoService.buscaCEP(payload.cep).then((res) => res);

    const ceps = ['15700282', '15704282', '15700012', '01015123'];

    // Método assincrono
    // Assim, pode se perceber, que a requisição foi feita, porem de forma assincrona, não respeitando a ordem do array
    ceps.map(async (item) => {
      const a = await this.alunoService.buscaCEP(item);
      console.log(`${item}, ${a}`);
    });

    // ceps.forEach(async (item) => {
    //   const a = await this.alunoService.buscaCEP(item);
    //   console.log(`${item}, ${a}`);
    // });

    // Método sincrono
    // console.log('Iniciando com o for');
    // for (const item of ceps) {
    //   const a = await this.alunoService.buscaCEP(item);
    //   console.log(`${item}, ${a}`);
    // }

    // return await new Promise((callback) => {
    //   const res = this.alunoService.buscaCEP(payload.cep);
    //   callback(res);
    // });
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
