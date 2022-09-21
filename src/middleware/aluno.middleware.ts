import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class AlunoMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log('Request aluno middleware...');
    next();
  }
}
