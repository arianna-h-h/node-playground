const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: fs.createReadStream(process.argv[2]),
});

let content = 'hello ';
function updateContent(cont, input) {
  content = cont + input;
  return content;
}

const result = rl.on('line', (input) => {
  content = content + input;
},
);
console.log(result.content);
