function highlight(strings, ...expressions) {
  return strings.reduce(
    (prevValue, str, i) =>
      expressions.length === i
        ? `${prevValue}${str}`
        : `${prevValue}${str}<strong>${expressions[i]}</strong>`,
    '',
  );
}

const v1 = 10;
const v2 = 20;
const result = highlight`a ${v1} b ${v2}`;
console.log(result);