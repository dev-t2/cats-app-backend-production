const num = 10;

console.log(num);

console.log();

const add = (a: number, b: number) => {
  return a + b;
};

console.log(add(1, 2));

console.log();

const logMessage = (message: string | null) => {
  if (message) {
    console.log(message);
  }
};

logMessage('TypeScript');

console.log();

const obj = {
  x: [1, 2, 3],
  y: { name: 'TypeScript' },
};

console.log(obj);

console.log();

const restOfPath = (path: string) => {
  return path.split('/').slice(1).join('/');
};

console.log(restOfPath('a/b/c'));

console.log();
