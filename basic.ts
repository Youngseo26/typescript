let animalName: string | number = "Tiger"; //유니온 타입
animalName = 10;

//type alias
type Person = {
  name: string;
  age: number;
};

let person: Person;
let people: Person[];

function add(a: number, b: number) {
  return a + b;
}

add(2, 3);

function print(value: any) {
  console.log(value);
}

//generics
function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, -1);
const stringArray = insertAtBeginning(["a", "b", "c"], "d");
