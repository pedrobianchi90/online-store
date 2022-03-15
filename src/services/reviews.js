let reviwesBD = [];

export function mudarBD(review) {
  reviwesBD = [...reviwesBD, review];
}

export function getBD() {
  return reviwesBD;
}
