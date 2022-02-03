let age: number = '12' as any;

age += 1;

console.log(age);

console.log();

const getAge = (birthDate: Date) => {
  console.log(birthDate);

  return 34;
};

const birthDate: any = '1989-04-01';

getAge(birthDate);

console.log();

let selectedId: number = 0;

const onSelectItem = (item: any) => {
  selectedId = item.id;

  console.log(selectedId);
};

interface IProps {
  onSelectItem: (id: number) => void;
}

const renderSelector = (props: IProps) => {
  console.log(props);
};

renderSelector({ onSelectItem });
