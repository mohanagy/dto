// test/projectorArray.test.ts
import ProjectorArray from '../lib/projectorArray';

describe('ProjectorArray', () => {
  describe('only', () => {
    it('returns an array of objects with only the specified keys', () => {
      const source = [
        { a: 1, b: 2, c: 3 },
        { a: 4, b: 5, c: 6 },
      ];
      const dto = ['a', 'c'];
      const result = ProjectorArray.only(source, dto);

      expect(result).toEqual([
        { a: 1, c: 3 },
        { a: 4, c: 6 },
      ]);
    });

    it('throws an error if the first parameter is not an array', () => {
      const source = 'not an array';
      const dto = ['a', 'c'];

      expect(() => ProjectorArray.only(source as any, dto)).toThrowError(
        'The first parameter of the `onlyArray` method must be an array.',
      );
    });

    it('throws an error if the second parameter is not an array', () => {
      const source = [
        { a: 1, b: 2, c: 3 },
        { a: 4, b: 5, c: 6 },
      ];
      const dto = 'not an array';

      expect(() => ProjectorArray.only(source, dto as any)).toThrowError(
        'The second parameter of the `onlyArray` method must be an array.',
      );
    });
  });

  describe('except', () => {
    it('returns an array of objects with the specified keys removed', () => {
      const source = [
        { a: 1, b: 2, c: 3 },
        { a: 4, b: 5, c: 6 },
      ];
      const dto = ['a', 'c'];
      const result = ProjectorArray.except(source, dto);
      console.log({ result });
      expect(result).toEqual([{ b: 2 }, { b: 5 }]);
    });

    it('throws an error if the first parameter is not an array', () => {
      const source = 'not an array';
      const dto = ['a', 'c'];

      expect(() => ProjectorArray.except(source as any, dto)).toThrowError(
        'The first parameter of the `exceptArray` method must be an array.',
      );
    });

    it('throws an error if the second parameter is not an array', () => {
      const source = [
        { a: 1, b: 2, c: 3 },
        { a: 4, b: 5, c: 6 },
      ];
      const dto = 'not an array';

      expect(() => ProjectorArray.except(source, dto as any)).toThrowError(
        'The second parameter of the `exceptArray` method must be an array.',
      );
    });
  });
});
