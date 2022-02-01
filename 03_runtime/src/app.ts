interface ISquare {
  width: number;
}

interface IRectangle extends ISquare {
  height: number;
}

const calculateArea = (shape: ISquare | IRectangle) => {
  if ('height' in shape) {
    return shape.width * shape.height;
  }

  return shape.width * shape.width;
};

console.log(calculateArea({ width: 10 }));
console.log(calculateArea({ width: 10, height: 20 }));

console.log();

const asNumber = (value: number | string) => {
  return typeof value === 'string' ? Number(value) : value;
};

console.log(asNumber(10));
console.log(asNumber('20'));
