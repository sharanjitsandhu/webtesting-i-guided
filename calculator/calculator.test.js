const calculator = require('./calculator.js');

describe('calculator.js', () => {
  describe('add() method', () => {
    it('runs the tests', () => {
      expect(true).toBe(true);
    });

    // add two numbers - happy path
    it('should return the sum of two numbers', () => {
      expect(calculator.add(2, 2)).toBe(4);
      expect(calculator.add(2, 1)).toBe(3);
      expect(calculator.add(0, 1)).toBe(1);
    });

    // return 0 when called without values
    it('should return 0 when called without values', () => {
      expect(calculator.add()).toBe(0);
    });

    // passing null, undefined, an array, an object, a string

    // only one number
    // return the number passed if only one value is provided
    it('should return variable if only passed on variable', () => {
      //arrange - setup
      const expected = 100;

      //act - run system under test
      const result = calculator.add(100);

      //assert - verify it works
      expect(result).toBe(expected);
    });

    // add any number of arguments separated by commas
    it('should handle any number of arguments separated by comma', () => {
      expect(calculator.add(1, 2, 3)).toBe(6);
    });

    // add support for handling an array of numbers
    it('should handle an arry of numbers', () => {
      expect(calculator.add([1, 2, 3])).toBe(6);
    });

    it('toBe or not.toBe', () => {
      const person = { name: 'John' };
      expect(true).not.toBe(false);
      expect({ name: 'John' }).toEqual({ name: 'John' });
      expect(person.name).toBe('John');
    });
  });
});
