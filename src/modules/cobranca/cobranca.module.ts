import { Module } from '@nestjs/common';
import { CobrancaController } from './cobranca.controller';
import { CobrancaService } from './cobranca.service';

@Module({
  controllers: [CobrancaController],
  providers: [CobrancaService]
})
export class CobrancaModule {}
