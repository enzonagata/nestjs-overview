import { logger } from './logger.middleware';

describe('LoggerMiddleware', () => {
  it('should be defined', () => {
    expect(logger).toBeDefined();
  });
});
