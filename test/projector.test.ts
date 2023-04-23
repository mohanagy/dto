// test/projector.test.ts
import Projector from '../lib/projector';

describe('Projector', () => {
  describe('only', () => {
    it('returns a new object with only the specified keys', () => {
      const source = { a: 1, b: 2, c: 3 };
      const dto = ['a', 'c'];
      const result = Projector.only(source, dto);

      expect(result).toEqual({ a: 1, c: 3 });
    });

    it('throws an error if the first parameter is not an object', () => {
      const source = 'not an object';
      const dto = ['a', 'c'];

      expect(() => Projector.only(source as any, dto)).toThrowError(
        'The first parameter of the `only` method must be an object.',
      );
    });

    it('throws an error if the second parameter is not an array', () => {
      const source = { a: 1, b: 2, c: 3 };
      const dto = 'not an array';

      expect(() => Projector.only(source, dto as any)).toThrowError(
        'The second parameter of the `only` method must be an array.',
      );
    });
  });

  describe('except', () => {
    it('returns a new object without the specified keys', () => {
      const source = { a: 1, b: 2, c: 3 };
      const dto = ['a', 'c'];
      const result = Projector.except(source, dto);

      expect(result).toEqual({ b: 2 });
    });

    it('throws an error if the first parameter is not an object', () => {
      const source = 'not an object';
      const dto = ['a', 'c'];

      expect(() => Projector.except(source as any, dto)).toThrowError(
        'The first parameter of the `except` method must be an object.',
      );
    });

    it('throws an error if the second parameter is not an array', () => {
      const source = { a: 1, b: 2, c: 3 };
      const dto = 'not an array';

      expect(() => Projector.except(source, dto as any)).toThrowError(
        'The second parameter of the `except` method must be an array.',
      );
    });
  });
});
