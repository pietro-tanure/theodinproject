import { useReducer } from "react";

interface Person {
  name: string,
  age: number,
  address?: string,
  gender: 'man' | 'woman'
}

interface Action {
  type: 'increment_age' | 'change_name',
  nextName?: string
}

function reducer(state: Person, action: Action) {
  switch (action.type) {
    case 'increment_age':
      return { ...state, age: state.age + 1 };
    case 'change_name':
      return { ...state, name: action.nextName };
    default:
      throw new Error('Unknown action: ' + action.type);
  }
}

function createInitialState(username: string): Person {
  return {
    name: username,
    age: 25,
    gender: "man"
  };
}

const username: string = "Pietro";

function Form() {
  const [state, dispatch] = useReducer(reducer, username, createInitialState);

  function handleButtonClick() {
    dispatch({ type: 'increment_age' });
  }

  function handleInputChange(e) {
    dispatch({
      type: 'change_name',
      nextName: e.target.value
    })
  }

  return (
    <>
      <input value={state.name} onChange={handleInputChange} />
      <button onClick={handleButtonClick}> Increment Age </button>
      <p>Hello, {state.name}. You are {state.age}.</p>
    </>
  )
}