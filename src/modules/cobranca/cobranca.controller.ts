import { Controller, Post } from '@nestjs/common';

@Controller('cobranca')
export class CobrancaController {
  @Post('cadastro')
  cobrancaGet() {
    return 'Hello cobrança!';
  }
}
