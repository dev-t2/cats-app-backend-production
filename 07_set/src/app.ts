type AB = 'A' | 'B';

const a: AB = 'A';

console.log(a);

const ab: AB = Math.random() < 0.5 ? 'A' : 'B';

console.log(ab);

console.log();

type AB12 = 'A' | 'B' | 12;

const ab12: AB12 = ab;

console.log(ab12);
