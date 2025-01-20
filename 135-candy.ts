function candy(ratings: number[]): number {
  const n = ratings.length;
  const candies = new Array(n).fill(1);

  // Da esquerda para a direita
  for (let i = 1; i < n; i++) {
    if (ratings[i] > ratings[i - 1]) {
      candies[i] = candies[i - 1] + 1;
    }
  }

  // Da direita para a esquerda
  for (let i = n - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      candies[i] = Math.max(candies[i], candies[i + 1] + 1);
    }
  }

  // Soma total dos doces
  return candies.reduce((a, b) => a + b, 0);
}
