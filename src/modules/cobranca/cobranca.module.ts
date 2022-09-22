import { Module } from '@nestjs/common';
import { CobrancaController } from './cobranca.controller';
import { CobrancaService } from './services/cobranca.service';

@Module({
  controllers: [CobrancaController],
  providers: [CobrancaService],
})
export class CobrancaModule {}
