import { AlunoMiddleware } from './aluno.middleware';

describe('AlunoMiddleware', () => {
  it('should be defined', () => {
    expect(new AlunoMiddleware()).toBeDefined();
  });
});
