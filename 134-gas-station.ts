function canCompleteCircuit(gas: number[], cost: number[]): number {
  const n = gas.length;

  for (let start = 0; start < n; start++) {
    let tank = 0;
    let canComplete = true;

    // Tenta percorrer todas as estações começando de `start`
    for (let i = 0; i < n; i++) {
      const currentStation = (start + i) % n;
      tank += gas[currentStation] - cost[currentStation];

      if (tank < 0) {
        canComplete = false;
        break; // Para o loop se não for possível continuar
      }
    }

    if (canComplete) {
      return start; // Retorna a estação inicial se o circuito for possível
    }
  }

  return -1; // Retorna -1 se não for possível completar o circuito
}
