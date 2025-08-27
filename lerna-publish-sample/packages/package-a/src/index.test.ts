import { greetFromPackageA } from './index';

describe('Package A', () => {
  describe('greetFromPackageA', () => {
    it('should return a greeting with the provided name', () => {
      const result = greetFromPackageA('World');
      expect(result).toBe('Hello from Package A, World!');
    });

    it('should handle empty string', () => {
      const result = greetFromPackageA('');
      expect(result).toBe('Hello from Package A, !');
    });

    it('should handle special characters', () => {
      const result = greetFromPackageA('José');
      expect(result).toBe('Hello from Package A, José!');
    });
  });
});
