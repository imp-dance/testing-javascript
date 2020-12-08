export function add(...rest: number[]): number {
  return rest.reduce((a, b) => a + b);
}
