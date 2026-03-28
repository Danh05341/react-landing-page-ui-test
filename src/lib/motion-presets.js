export const EASE_OUT = [0.22, 1, 0.36, 1]

export function viewportOnce(amount = 0.15) {
  return {
    once: true,
    amount,
    margin: '0px 0px -40px 0px',
  }
}
