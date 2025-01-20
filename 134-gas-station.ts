function canCompleteCircuit(gas: number[], cost: number[]): number {
  const n = gas.length;
  let totalTank = 0; // Diferença total entre o gas disponível e o custo
  let currentTank = 0; // Diferença no tanque atual enquanto percorre as estações
  let startingStation = 0; // Índice da estação inicial

  for (let i = 0; i < n; i++) {
    const netGas = gas[i] - cost[i]; // Diferença entre o gas recebido e o custo
    totalTank += netGas;
    currentTank += netGas;

    // Se o tanque atual ficar negativo, não é possível começar nessa estação
    if (currentTank < 0) {
      startingStation = i + 1; // Próxima estação será o novo ponto de partida
      currentTank = 0; // Resetar o tanque atual
    }
  }

  // Se o totalTank for negativo, não é possível completar o circuito
  return totalTank >= 0 ? startingStation : -1;
}
