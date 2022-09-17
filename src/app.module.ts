import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AlunoModule } from './aluno/aluno.module';
import { CreditoModule } from './credito/credito.module';
import { CobrancaModule } from './cobranca/cobranca.module';
import { AlunoController } from './aluno/aluno.controller';

@Module({
  imports: [AlunoModule,CreditoModule, CobrancaModule],
  controllers: [AppController, AlunoController],
  providers: [AppService],
})
export class AppModule {}
