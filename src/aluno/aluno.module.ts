import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
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
      .forRoutes(AlunoController);
  }
}
