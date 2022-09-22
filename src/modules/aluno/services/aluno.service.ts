import { Injectable } from '@nestjs/common';
import { BuscaCepRepository } from '../repository/buscacep.repository';

export class Type {
  type: string;
}

@Injectable()
export class AlunoService {
  constructor(private readonly buscarcepRepository: BuscaCepRepository) {}

  async loop(payload: Type) {
    const ceps = ['15700282', '15704282', '15700012', '01001000'];

    //exemplo de foreach
    if (payload.type == 'foreach') {
      console.log('Foreach iniciado...');
      const res = ceps.forEach(async (item) => {
        const a = await this.buscarcepRepository.buscaCEP(item);
        console.log(`${item}, ${a}`);
        return a;
      });
      console.log(res);
      console.log('Foreach terminado...');
      return res;
    }

    //exemplo usando o map
    if (payload.type == 'map') {
      console.log('Map iniciado...');
      const res = ceps.map((item) => {
        //        const a = await this.buscaCEP(item);
        const result = parseInt(item) * 2;
        return result;
      });
      console.log(ceps);
      console.log(res);
      console.log('Map terminado...');
      return res;
    }

    //exemplo usando o map com promise
    if (payload.type == 'mapp') {
      console.log('Mapp initialized');
      const promises = ceps.map(async (item) => {
        const a = await this.buscarcepRepository.buscaCEP(item);
        console.log(`${item}, ${a}`);
        return a;
      });
      await Promise.all(promises).then((a) => {
        console.log(a);
      });
      console.log('Mapp Finished');
    }

    //exemplo usando for
    if (payload.type == 'for') {
      console.log('For iniciado...');
      for (const item of ceps) {
        const a = await this.buscarcepRepository.buscaCEP(item);
        console.log(a);
      }
      console.log('For terminado...');
      return;
    }
  }
}
