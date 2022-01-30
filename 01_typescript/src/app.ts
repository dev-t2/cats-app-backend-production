const country = 'korea';

console.log(country.toUpperCase());

console.log();

interface ITodo {
  id: string;
  content: string;
}

const todos: ITodo[] = [
  { id: '1', content: 'JavaScript' },
  { id: '2', content: 'TypeScript' },
];

todos.forEach((todo) => {
  console.log(todo.content);
});
