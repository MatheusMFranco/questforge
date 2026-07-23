import { describe, expect, it } from 'vitest';
import { queryClient } from './query-client';

describe('queryClient', () => {
  it('should create a QueryClient instance', () => {
    expect(queryClient).toBeDefined();
  });
});
