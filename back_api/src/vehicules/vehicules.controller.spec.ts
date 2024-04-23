import { Test, TestingModule } from '@nestjs/testing';
import { VehiculesController } from './vehicules.controller';

describe('VehiculesController', () => {
  let controller: VehiculesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VehiculesController],
    }).compile();

    controller = module.get<VehiculesController>(VehiculesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
