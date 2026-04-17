// https://www.theodinproject.com/lessons/node-path-react-new-rendering-techniques
const animals = ['Dog', 'Cat', 'Elephant', 'Giraffe'];

function App() {
  return (
    <div>
      <h1>Animals:</h1>
      <ul>
        {animals.map((animal) => {
          return <li key={animal}>{animal}</li>;
        })}
      </ul>
    </div>
  )
}

// ----------------------------
function App2() {
  const animalList = animals.map((animal) => <li key={animal}>{animal}</li>);
  return (
    <div>
      <h1>Animals:</h1>
      <ul>
        {animalList}
      </ul>
    </div>
  )

}

// ----------------------------
function ListItem(props: { item: string, isPacked: boolean }) {
  if (props.isPacked) {
    return <li>{props.item} ✅</li>;
  }
  return null;
}

function List(props: { items: string[] }) {
  return (
    <ul>
      {props.items.map((listItem) => (
        <ListItem isPacked={true} key={listItem} item={listItem} />
      ))}
    </ul>
  );
}

function App3() {
  const objects: string[] = ['brush', 'comb', 'mirror', 'toothpaste'];
  return (
    <div>
      <h1>Objects:</h1>
      <List items={objects} />
    </div>
  );
}

export { App3 };

// ----------------------------
function List2(props: { animals: string[] }) {
  return (
    <ul>
      {props.animals.map((animal) => {
        return <li key={animal}>{animal.startsWith("L")
          ? `${animal} ✅`
          : `${animal} ❌`}</li>;
      })}
    </ul>
  );
}

function App4() {
  const animals: string[] = ['Lion', 'Tiger', 'Leopard', 'Elephant', 'Lemur'];
  return (
    <div>
      <h1>Animals that start with the letter L:</h1>
      <List2 animals={animals} />
    </div>
  );
}
export { App4 };

