import { Test, TestingModule } from '@nestjs/testing';
import { CreditoService } from './credito.service';

describe('CreditoService', () => {
  let service: CreditoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreditoService],
    }).compile();

    service = module.get<CreditoService>(CreditoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
