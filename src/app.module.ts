import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AlunoModule } from './modules/aluno/aluno.module';
import { CreditoModule } from './modules/credito/credito.module';
import { CobrancaModule } from './modules/cobranca/cobranca.module';
@Module({
  imports: [AlunoModule, CreditoModule, CobrancaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
