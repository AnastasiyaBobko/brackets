module.exports = function check(str, bracketsConfig) {
  const brackets = [];
  const pairs = new Map(bracketsConfig);

  for (const char of str) {
    const last = brackets[brackets.length - 1];

    if (brackets.length && pairs.get(last) === char) {
      brackets.pop();
    } else {
      brackets.push(char);
    }
  }

  return brackets.length === 0;
};
