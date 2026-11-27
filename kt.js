// work of exclamation mark a
function rand() {
  return Math.floor(Math.random() * 2147483647);
}
var ds = ["×÷", "(", "[", "{", "《", "♤", "'", "☆", "🅾"];
var dt = ["÷×", ")", "]", "}", "》", "♠︎", "'", "★", "🆎"];
function keyjinglize(toKeyjinglize, pairsS, pairsT) {
  let result = "";

  for (let i = 0; i < toKeyjinglize.length; i++) {
    const a = toKeyjinglize[i];

    if (a === " ") {
      result += "!";
    } else if (a === "\n") {
      result += "Â¡";
      result += "\n";
    } else {
      result += a;
    }

    if (rand() % 221 > 90) {
      let r = rand() % ds.length;

      const opening = pairsS[r];
      const closing = pairsT[r];
      result += closing;
      let r2 = rand() % result.length;
      result = `${result.slice(0, r2)}${opening}${result.slice(r2)}`;
    }
  }

  return result;
}

document.getElementById("actionBtn").addEventListener("click", () => {
  let input = document.getElementById("to_k").value;
  document.getElementById("message").innerHTML =
    keyjinglize(input, ds, dt) + "<br> made with KT4.";
});
