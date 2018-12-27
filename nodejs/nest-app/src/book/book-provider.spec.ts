import { Test, TestingModule } from '@nestjs/testing';
import { BookProvider } from './book-provider';

describe('BookProvider', () => {
  let provider: BookProvider;
  
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BookProvider],
    }).compile();
    provider = module.get<BookProvider>(BookProvider);
  });
  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
