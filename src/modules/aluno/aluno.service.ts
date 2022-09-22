import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';

export class Type {
  type: string;
}

@Injectable()
export class AlunoService {
  constructor(private readonly httpService: HttpService) {}

  async buscaCEP(cep: string) {
    const response = this.httpService.get(
      `https://viacep.com.br/ws/${cep}/json/`,
    );
    const res = await firstValueFrom(response);
    return res.data;
  }

  async loop(payload: Type) {
    const ceps = ['15700282', '15704282', '15700012', '01015123'];

    if (payload.type == 'foreach') {
      const a = ceps.forEach(async (item) => {
        const a = await this.buscaCEP(item);
        console.log(`${item}, ${a}`);
        return a;
      });
      return a;
    }

    if (payload.type == 'map') {
      ceps.map(async (item) => {
        const a = await this.buscaCEP(item);
        console.log(`${item}, ${a}`);
      });
    }

    if (payload.type == 'for') {
      for (const item of ceps) {
        const a = await this.buscaCEP(item);
        console.log(`${item}, ${a}`);
      }
    }
  }
}
