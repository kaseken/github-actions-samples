import {
  calculateFromPackageB,
  multiplyFromPackageB,
  greetWithMath,
} from './index';

describe('Package B', () => {
  describe('calculateFromPackageB', () => {
    it('should add two positive numbers', () => {
      const result = calculateFromPackageB(2, 3);
      expect(result).toBe(5);
    });

    it('should add negative numbers', () => {
      const result = calculateFromPackageB(-2, -3);
      expect(result).toBe(-5);
    });

    it('should handle zero', () => {
      const result = calculateFromPackageB(0, 5);
      expect(result).toBe(5);
    });

    it('should handle decimals', () => {
      const result = calculateFromPackageB(2.5, 3.7);
      expect(result).toBeCloseTo(6.2);
    });
  });

  describe('multiplyFromPackageB', () => {
    it('should multiply two positive numbers', () => {
      const result = multiplyFromPackageB(3, 4);
      expect(result).toBe(12);
    });

    it('should multiply by zero', () => {
      const result = multiplyFromPackageB(5, 0);
      expect(result).toBe(0);
    });

    it('should handle negative numbers', () => {
      const result = multiplyFromPackageB(-3, 4);
      expect(result).toBe(-12);
    });

    it('should handle decimals', () => {
      const result = multiplyFromPackageB(2.5, 4);
      expect(result).toBe(10);
    });
  });

  describe('greetWithMath', () => {
    it('should combine greeting with math calculation', () => {
      const result = greetWithMath('Alice', 5, 3);
      expect(result).toBe('Hello from Package A, Alice! The sum of 5 + 3 = 8');
    });

    it('should work with different names and numbers', () => {
      const result = greetWithMath('Bob', 10, 20);
      expect(result).toBe('Hello from Package A, Bob! The sum of 10 + 20 = 30');
    });

    it('should handle negative numbers in calculation', () => {
      const result = greetWithMath('Charlie', -2, 7);
      expect(result).toBe(
        'Hello from Package A, Charlie! The sum of -2 + 7 = 5'
      );
    });
  });
});
