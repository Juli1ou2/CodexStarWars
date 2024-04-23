import { Test, TestingModule } from '@nestjs/testing';
import { VehiculesService } from './vehicules.service';

describe('VehiculesService', () => {
  let service: VehiculesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VehiculesService],
    }).compile();

    service = module.get<VehiculesService>(VehiculesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
