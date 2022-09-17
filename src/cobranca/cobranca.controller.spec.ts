import { Test, TestingModule } from '@nestjs/testing';
import { CobrancaController } from './cobranca.controller';

describe('CobrancaController', () => {
  let controller: CobrancaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CobrancaController],
    }).compile();

    controller = module.get<CobrancaController>(CobrancaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
