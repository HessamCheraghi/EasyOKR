export function calculatePercentage(
  base: number,
  target: number,
  current: number,
) {
  return ((current - base) / (target - base)) * 100;
}
