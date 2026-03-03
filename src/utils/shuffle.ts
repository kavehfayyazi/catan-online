// Fisher–Yates Shuffle Algorithm

// Reverse iterates through the array and swaps
// each element with a previous one
export function shuffle<T>(array: T[]): T[] {
  const shuffled = [...array]

  let m = shuffled.length

  while (m) {
    let i = Math.floor(Math.random() * m--);
    [shuffled[i], shuffled[m]] = [shuffled[m], shuffled[i]]
  }

  return shuffled
}