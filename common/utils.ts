export function microStxToStx(microStx: string | number): number {
  return Number(Number(microStx) / Math.pow(10, 6));
}
