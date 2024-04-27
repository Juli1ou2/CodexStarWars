import { Test, TestingModule } from '@nestjs/testing';
import { AstresService } from './astres.service';

describe('AstresService', () => {
  let service: AstresService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AstresService],
    }).compile();

    service = module.get<AstresService>(AstresService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
