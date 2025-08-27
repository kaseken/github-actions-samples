import { greetFromPackageA } from '@kaseken/package-a';

export function calculateFromPackageB(a: number, b: number): number {
  return a + b;
}

export function multiplyFromPackageB(a: number, b: number): number {
  return a * b;
}

export function greetWithMath(name: string, a: number, b: number): string {
  const greeting = greetFromPackageA(name);
  const sum = calculateFromPackageB(a, b);
  return `${greeting} The sum of ${a} + ${b} = ${sum}`;
}
