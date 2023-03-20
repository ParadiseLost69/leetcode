var maxNumberOfBalloons = function (text) {
  let map = {};

  for (const char of text) {
    map[char] = map[char] ? map[char] + 1 : 1;
  }

  const b = map["b"] || 0;
  const a = map["a"] || 0;
  const l = Math.floor(map["l"] / 2) || 0;
  const o = Math.floor(map["o"] / 2) || 0;
  const n = map["n"] || 0;

  return Math.min(b, a, l, o, n);
};
