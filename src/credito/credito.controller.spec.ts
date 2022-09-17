import { Test, TestingModule } from '@nestjs/testing';
import { CreditoController } from './credito.controller';

describe('CreditoController', () => {
  let controller: CreditoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CreditoController],
    }).compile();

    controller = module.get<CreditoController>(CreditoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
