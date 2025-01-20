function canCompleteCircuit(gas: number[], cost: number[]): number {
  const n = gas.length;
  let startingStation = 0; // Ponto de partida inicial
  let tank = 0; // Gasolina acumulada no tanque

  for (let i = 0; i < n; i++) {
    tank += gas[i] - cost[i];

    // Se o tanque ficar negativo, assume que a próxima estação deve ser a nova partida
    if (tank < 0) {
      startingStation = i + 1;
      tank = 0; // Reseta o tanque
    }
  }

  return startingStation < n ? startingStation : -1;
}
