import { Test, TestingModule } from '@nestjs/testing';
import { EspecesService } from './especes.service';

describe('EspecesService', () => {
  let service: EspecesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EspecesService],
    }).compile();

    service = module.get<EspecesService>(EspecesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
