import { Test, TestingModule } from '@nestjs/testing';
import { BuscaCepRepository } from './buscacep.repository';

describe('BuscaCepRepository', () => {
  let service: BuscaCepRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BuscaCepRepository],
    }).compile();

    service = module.get<BuscaCepRepository>(BuscaCepRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
