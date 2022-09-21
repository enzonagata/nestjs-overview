import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';
import { AlunoMiddleware } from 'src/middleware/aluno.middleware';
import { AlunoController } from './aluno.controller';
import { AlunoService } from './aluno.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
  ],
  controllers: [AlunoController],
  providers: [AlunoService],
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
