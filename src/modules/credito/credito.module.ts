import { Module } from '@nestjs/common';
import { CreditoController } from './credito.controller';
import { CreditoService } from './credito.service';

@Module({
  controllers: [CreditoController],
  providers: [CreditoService],
})
export class CreditoModule {}
