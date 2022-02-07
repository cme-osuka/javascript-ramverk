const people = [
  {
    name: "Oscar",
    age: 29,
  },
  {
    name: "Bob",
    age: 1,
  },
  {
    name: "Stevie",
    age: 2,
  },
];

function MyComponent() {
  return (
    <div>
      {people.map((person) => {
        return <p>{person.name}</p>;
      })}
    </div>
  );
}
