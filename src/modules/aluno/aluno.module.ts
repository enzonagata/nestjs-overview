import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';
import { AlunoMiddleware } from 'src/middleware/aluno.middleware';
import { AlunoController } from './controllers/aluno.controller';
import { AlunoService } from './services/aluno.service';
import { HttpModule } from '@nestjs/axios';
import { BuscaCepRepository } from './repository/buscacep.repository';

@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
  ],
  controllers: [AlunoController],
  providers: [AlunoService, BuscaCepRepository],
})
export class AlunoModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AlunoMiddleware)
      .exclude({
        path: 'aluno/cadastro',
        method: RequestMethod.GET,
      })
      .forRoutes(AlunoController);
  }
}
