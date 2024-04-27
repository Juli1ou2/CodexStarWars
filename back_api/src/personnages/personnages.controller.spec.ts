import { Test, TestingModule } from '@nestjs/testing';
import { PersonnagesController } from './personnages.controller';

describe('PersonnagesController', () => {
  let controller: PersonnagesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PersonnagesController],
    }).compile();

    controller = module.get<PersonnagesController>(PersonnagesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
