const multiLineString = `
  This is the first line.
  This is the second line.
  And this is the third line.
`;

const lines = multiLineString.split("\n");

lines.forEach((line) => {
  console.log(line.trim());
});
