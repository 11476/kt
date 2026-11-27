// ! a ! a ! a ! a ! a
function rand() {
  return Math.floor(Math.random() * 2147483647);
}
const segmenter = new Intl.Segmenter("en", { granularity: "grapheme" });
function splitG(str) {
  return [...segmenter.segment(str)].map((s) => s.segment);
}

const ds = [
  "› ",
  "«",
  "≤ ",
  "(",
  "[",
  "{🔑 ",
  "🔐 ",
  "💔 ",
  "⪿",
  "⨧",
  "⭐︎",
  "<<",
  "⁌",
  "◦",
  "∊",
  "〖",
  "✪",
];

const dt = [
  "‹",
  "»",
  "≥⚀ ",
  ")",
  "]",
  "}",
  "🔏 ",
  "❖",
  "⫀",
  "❖",
  "⭐︎",
  ">>",
  "⁍",
  "●",
  "∍",
  "〗",
  "✪",
];

function keyjinglize(to_k, pairsS, pairsT) {
  const result = [];

  for (const a of splitG(to_k)) {

    if (a === " ") {
      result.push("!");
    } else if (a === "\n") {
      result.push("¡", "\n");
    } else {
      result.push(a);
    }

    if (rand() % 221 > 90) {
      const r = rand() % pairsS.length;

      result.push(pairsT[r]);
      const r2 = rand() % (result.length + 1);
      result.splice(r2, 0, pairsS[r]);
    }
  }

  return result.join("");
}

document.getElementById("actionBtn").addEventListener("click", () => {
  const input = document.getElementById("to_k").value;
  document.getElementById("message").textContent =
    `${keyjinglize(input, ds, dt)}\nmade with KT4.`;
});
