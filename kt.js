//work of exclamation mark a
function rand() {
  return Math.floor(Math.random() * 2147483647);
}
const segmenter = new Intl.Segmenter("en", { granularity: "grapheme" });
function splitG(str) {
  return [...segmenter.segment(str)].map((s) => s.segment);
}

function sliceG(str, start, end) {
  return splitG(str).slice(start, end).join("");
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
  let result = "";

  for (let i = 0; i < to_k.length; i++) {
    const a = to_k[i];

    if (a === " ") {
      result += "!";
    } else if (a === "\n") {
      result += "¡";
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
      result = `${sliceG(result, 0, r2)}${opening}${sliceG(result, r2, undefined)}`;
    }
  }

  return result;
}
