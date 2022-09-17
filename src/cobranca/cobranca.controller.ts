import { Controller, Get } from '@nestjs/common';

@Controller('cobranca')
export class CobrancaController {
    @Get()
    cobrancaGet() {
        return 'Hello cobrança!';
    }
}
