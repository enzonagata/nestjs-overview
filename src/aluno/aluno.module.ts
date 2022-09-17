import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AlunoMiddleware } from 'src/middleware/aluno.middleware';
import { AlunoController } from './aluno.controller';
import { AlunoService } from './aluno.service';

@Module({
  controllers: [AlunoController],
  providers: [AlunoService]
})
export class AlunoModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AlunoMiddleware)
      .exclude({
        path: 'aluno/cadastro', method: RequestMethod.GET
      })
      .forRoutes({ path: 'aluno', method: RequestMethod.GET });
  }
}
