import { greetFromPackageA } from '@kaseken/package-a';
import {
  calculateFromPackageB,
  multiplyFromPackageB,
  greetWithMath,
} from '@kaseken/package-b';

describe('@kaseken/package-a', () => {
  describe('greetFromPackageA', () => {
    it('should return a greeting with the provided name', () => {
      const result = greetFromPackageA('World');
      expect(result).toBe('Hello from Package A, World!');
    });

    it('should handle different names', () => {
      const result = greetFromPackageA('Developer');
      expect(result).toBe('Hello from Package A, Developer!');
    });

    it('should handle empty string', () => {
      const result = greetFromPackageA('');
      expect(result).toBe('Hello from Package A, !');
    });
  });
});

describe('@kaseken/package-b', () => {
  describe('calculateFromPackageB', () => {
    it('should add two positive numbers', () => {
      expect(calculateFromPackageB(5, 3)).toBe(8);
    });

    it('should handle negative numbers', () => {
      expect(calculateFromPackageB(-5, 3)).toBe(-2);
    });

    it('should handle zero', () => {
      expect(calculateFromPackageB(0, 5)).toBe(5);
    });
  });

  describe('multiplyFromPackageB', () => {
    it('should multiply two positive numbers', () => {
      expect(multiplyFromPackageB(4, 7)).toBe(28);
    });

    it('should handle negative numbers', () => {
      expect(multiplyFromPackageB(-3, 4)).toBe(-12);
    });

    it('should handle zero', () => {
      expect(multiplyFromPackageB(0, 5)).toBe(0);
    });
  });

  describe('greetWithMath', () => {
    it('should combine greeting from package-a with math calculation', () => {
      const result = greetWithMath('Alice', 10, 15);
      expect(result).toBe(
        'Hello from Package A, Alice! The sum of 10 + 15 = 25'
      );
    });

    it('should handle negative numbers in math', () => {
      const result = greetWithMath('Bob', -5, 12);
      expect(result).toBe('Hello from Package A, Bob! The sum of -5 + 12 = 7');
    });

    it('should handle zero values', () => {
      const result = greetWithMath('Charlie', 0, 0);
      expect(result).toBe(
        'Hello from Package A, Charlie! The sum of 0 + 0 = 0'
      );
    });
  });
});
