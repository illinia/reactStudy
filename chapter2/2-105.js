const v1 = 10;
const v2 = 20;

taggedFunc`a-${v1}-b-${v2}-c`;

taggedFunc`a-${v1}-b-${v2}`;

taggedFunc`${v1}-b${v2}`;

function taggedFunc(strings, ...expressions) {
  console.log(strings.length === expressions.length + 1);
}