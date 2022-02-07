const object = {
  name: "Stevie",
  age: 2,
  length: "infinite",
  favoriteFood: "Chicken chews",
  lovesHunddagis: true,
};

function MyComponent() {
  const { name, age } = object;

  return (
    <div>
      <p>
        {`My name is ${name}, I'm ${age} years old`}
      </p>
    </div>
  );
}
