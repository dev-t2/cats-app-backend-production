type T1 = 'String Literal';
type T2 = 123;

const v1: T1 = 'String Literal';
const v2: T2 = 123;

console.log(v1);
console.log(v2);

console.log();

interface IPerson {
  name: string;
}

const person: IPerson = { name: 'TypeScript' };

console.log(person);

console.log();

const email = ({
  person,
  subject,
  body,
}: {
  person: IPerson;
  subject: string;
  body: string;
}) => {
  console.log({ person, subject, body });
};

email({ person: { name: 'TypeScript' }, subject: 'Subject', body: 'Body' });
