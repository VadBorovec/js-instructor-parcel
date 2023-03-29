// let program = 'let program = %o;console.log(program, program);';
// console.log(program, program);

const quine = `const quine = ${JSON.stringify(
  `quine = ${quine}`
)};\n\nconsole.log(quine);`;

console.log(quine);
