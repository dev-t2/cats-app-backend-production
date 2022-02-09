interface IPerson {
  name: string;
}

const person1: IPerson = { name: 'TypeScript' };

console.log(person1);

const person2 = { name: 'TypeScript', age: 34 } as IPerson;

console.log(person2);

console.log();

const people1 = ['JavaScript', 'TypeScript'].map((name) => {
  return { name } as IPerson;
});

console.log(people1);

const people2: IPerson[] = ['JavaScript', 'TypeScript'].map((name) => {
  return { name };
});

console.log(people2);
