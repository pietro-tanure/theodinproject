import { useState } from "react";

function Person() {
  const [person, setPerson] = useState({ name: 'Alice', age: 25 });

  // BAD - DO NOT DO THIS
  // const handleIncreaseAge = () => {
  //   person.age += 1;
  //   setPerson(person);
  // }

  // GOOD - DO THIS INSTEAD
  const handleIncreaseAge = () => {
    const newPerson = { ...person, age: person.age + 1 };
    setPerson(newPerson);
    setPerson({ ...person, age: person.age + 1 }); // this will not double increase age
    setPerson((prevPerson: typeof person) => ({ ...prevPerson, age: prevPerson.age + 1 })); // correct way to double increase age
  };

  return (
    <>
      <h1>{person.name}</h1>
      <h2>{person.age}</h2>
      <button onClick={handleIncreaseAge}>Increase Age</button>
    </>
  )
}

// Controlled component
function CustomInput() {
  const [value, setValue] = useState("");
  return (
    <input
      type="text"
      value={value}
      onChange={(event) => setValue(event.target.value)} // now when user types, state is updated
    />
  );
}

function Form() {
  const [isSent, setIsSent] = useState(false);
  const [message, setMessage] = useState("Hi");
  if (isSent) {
    return <h1>Message sent!</h1>;
  }
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      setIsSent(true);
      sendMessage(message);
    }}>
      <textarea
        placeholder="Message"
        value={message}
        onChange={e => setMessage(e.target.value)}
      />
      <button type="submit">Send</button>
    </form>
  );
}

function sendMessage(message: string) {
  console.log("Sending message:", message);
}