import { Test, TestingModule } from '@nestjs/testing';
import { PersonnagesService } from './personnages.service';

describe('PersonnagesService', () => {
  let service: PersonnagesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PersonnagesService],
    }).compile();

    service = module.get<PersonnagesService>(PersonnagesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
