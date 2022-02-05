type AB = 'A' | 'B';

const a: AB = 'A';

console.log(a);

console.log();

const ab: AB = Math.random() < 0.5 ? 'A' : 'B';

console.log(ab);

console.log();

type AB12 = 'A' | 'B' | 12;

const ab12: AB12 = ab;

console.log(ab12);

console.log();

interface Person {
  name: string;
}

interface PersonSpan extends Person {
  birth: Date;
  death?: Date;
}

const personSpan: PersonSpan = {
  name: 'TypeScript',
  birth: new Date('1989/04/01'),
};

console.log(personSpan);
