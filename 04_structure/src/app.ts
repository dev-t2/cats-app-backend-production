interface IVector2D {
  x: number;
  y: number;
}

const calculateLength2D = (v: IVector2D) => {
  return Math.sqrt(v.x * v.x + v.y * v.y);
};

interface INamedVector {
  name: string;
  x: number;
  y: number;
}

const namedVector: INamedVector = { name: 'TypeScript', x: 3, y: 4 };

const result1 = calculateLength2D(namedVector);

console.log(result1);

console.log();

interface IVector3D {
  x: number;
  y: number;
  z: number;
}

const calculateLength3D = (v: IVector3D) => {
  return Math.sqrt(v.x * v.x + v.y * v.y + v.z * v.z);
};

const vector3D: IVector3D = { x: 3, y: 4, z: 5 };

const result2 = calculateLength2D(vector3D);

console.log(result2);

console.log();

const result3 = calculateLength3D(vector3D);

console.log(result3);
