import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';

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
}
