import { Test, TestingModule } from '@nestjs/testing';
import { SkusResolver } from './skus.resolver';

describe('SkusResolver', () => {
  let resolver: SkusResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SkusResolver],
    }).compile();

    resolver = module.get<SkusResolver>(SkusResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
