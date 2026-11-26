function rand() {
  return Math.floor(Math.random() * 2147483647);
}

function keyjinglize(toKeyjinglize, pairsS, pairsT) {
  let result = "";

  for (let i = 0; i < toKeyjinglize.length; i++) {
    const a = toKeyjinglize[i];

    if (a === " ") {
      result += "!";
    } else if (a === "\n") {
      result += "¡";
      result += "\n";
    } else {
      result += a;
    }

    if (rand() % 221 > 90) {
      const opening = pairsS[rand() % 17];
      const closing = pairsT[rand() % 17];
      result += opening + closing;
    }
  }

  return result;
}
