/* The Projector class contains static methods for filtering objects by including or excluding
specified keys. */
class Projector {
  /**
   * The `only` function takes an object and an array of keys and returns a new object with only the
   * specified keys from the original object.
   * @param source - The source parameter is an object that contains the data that needs to be filtered.
   * @param {string[]} dto - The `dto` parameter is an array of strings that represents the keys that
   * should be included in the returned object. The `only` method will iterate over these keys and
   * include them in the returned object only if they exist in the `source` object.
   * @returns The `only` method returns a new object that contains only the properties specified in the
   * `dto` array parameter. The properties are taken from the `source` object parameter.
   */
  static only(source: Record<string, any>, dto: string[]): Record<string, any> {
    if (!Array.isArray(dto)) {
      throw new Error(
        'The second parameter of the `only` method must be an array.',
      );
    }
    if (typeof source !== 'object') {
      throw new Error(
        'The first parameter of the `only` method must be an object.',
      );
    }
    let length = dto.length;
    const result = {};
    while (length--) {
      const key = dto[length].toString();
      if (source.hasOwnProperty(key)) {
        result[key] = source[key];
      }
    }

    return result;
  }
  /**
   * The `except` function removes specified keys from an object and returns a new object.
   * @param source - An object that contains key-value pairs.
   * @param {string[]} dto - The `dto` parameter is an array of strings representing the keys that should
   * be excluded from the `source` object. The `except` method returns a new object that is a clone of
   * the `source` object, but with the specified keys removed.
   * @returns The `except` method returns a new object that is a clone of the `source` object with the
   * properties specified in the `dto` array removed.
   */

  static except(
    source: Record<string, any>,
    dto: string[],
  ): Record<string, any> {
    if (!Array.isArray(dto)) {
      throw new Error(
        'The second parameter of the `except` method must be an array.',
      );
    }
    if (typeof source !== 'object') {
      throw new Error(
        'The first parameter of the `except` method must be an object.',
      );
    }
    let length = dto.length;
    const clone = JSON.parse(JSON.stringify(source));
    while (length--) {
      const key = dto[length].toString();
      if (clone.hasOwnProperty(key)) {
        delete clone[key];
      }
    }

    return clone;
  }
}

export default Projector;
