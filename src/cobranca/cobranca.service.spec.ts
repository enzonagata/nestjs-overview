import { Test, TestingModule } from '@nestjs/testing';
import { CobrancaService } from './cobranca.service';

describe('CobrancaService', () => {
  let service: CobrancaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CobrancaService],
    }).compile();

    service = module.get<CobrancaService>(CobrancaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
