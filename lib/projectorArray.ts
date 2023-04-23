import Projector from './projector';

/* The `ProjectorArray` class contains static methods for manipulating arrays of objects by selecting
or excluding specific properties. */
class ProjectorArray {
  /**
   * The function `only` takes an array of objects and an array of keys and returns a new array of
   * objects with only the specified keys.
   * @param {Record<string, any>[]} source - An array of objects (each object is a record with key-value
   * pairs).
   * @param {string[]} dto - The `dto` parameter is an array of strings that represents the keys that
   * should be included in the resulting objects. The method `only` will create a new object with only
   * the properties specified in the `dto` array.
   * @returns The `onlyArray` method returns an array of objects that contain only the properties
   * specified in the `dto` parameter.
   */
  static only(
    source: Record<string, any>[],
    dto: string[],
  ): Record<string, any>[] {
    if (!Array.isArray(dto)) {
      throw new Error(
        'The second parameter of the `onlyArray` method must be an array.',
      );
    }
    if (!Array.isArray(source)) {
      throw new Error(
        'The first parameter of the `onlyArray` method must be an array.',
      );
    }
    let length = source.length;
    const result: Record<string, any>[] = [];
    while (length--) {
      result.unshift(Projector.only(source[length], dto));
    }
    return result;
  }

  /**
   * The function takes an array of objects and an array of strings, and returns a new array of objects
   * with the specified properties removed.
   * @param {Record<string, any>[]} source - An array of objects (each object is a record with string
   * keys and any values).
   * @param {string[]} dto - The `dto` parameter is an array of strings representing the keys of the
   * properties that should be excluded from each object in the `source` array. The `expect` method uses
   * the `Projector.except` method to create a new object for each element in the `source` array,
   * excluding
   * @returns The `expect` function is returning an array of objects (`Record<string, any>[]`).
   */
  static except(
    source: Record<string, any>[],
    dto: string[],
  ): Record<string, any>[] {
    if (!Array.isArray(dto)) {
      throw new Error(
        'The second parameter of the `exceptArray` method must be an array.',
      );
    }
    if (!Array.isArray(source)) {
      throw new Error(
        'The first parameter of the `exceptArray` method must be an array.',
      );
    }
    let length = source.length;
    const result: Record<string, any>[] = [];
    while (length--) {
      result.unshift(Projector.except(source[length], dto));
    }
    return result;
  }
}

export default ProjectorArray;
