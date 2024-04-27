import { Test, TestingModule } from '@nestjs/testing';
import { AstresController } from './astres.controller';

describe('AstresController', () => {
  let controller: AstresController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AstresController],
    }).compile();

    controller = module.get<AstresController>(AstresController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
