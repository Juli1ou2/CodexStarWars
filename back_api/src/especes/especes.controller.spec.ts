import { Test, TestingModule } from '@nestjs/testing';
import { EspecesController } from './especes.controller';

describe('EspecesController', () => {
  let controller: EspecesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EspecesController],
    }).compile();

    controller = module.get<EspecesController>(EspecesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
