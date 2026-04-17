import { Component } from "react";

class Count extends Component<{ todos: string[] }> {
  render() {
    const { todos } = this.props; // Access the todos array from props
    return (
      <div>
        <h4>Number of Todos: {todos.length}</h4>
      </div>
    );
  }
}

class ClassInput extends Component<{ name: string }, { todos: string[]; inputVal: string }> {
  constructor(props: { name: string }) {
    super(props);

    this.state = {
      todos: [],
      inputVal: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState((state) => ({
      ...state,
      inputVal: e.target.value,
    }));
  }

  handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    this.setState((state) => ({
      todos: state.todos.concat(state.inputVal),
      inputVal: "",
    }));
  }

  handleDelete(todoToDelete: string) {
    this.setState((state) => ({
      todos: state.todos.filter((todo) => todo !== todoToDelete),
    }));
  }

  render() {
    return (
      <section>
        <h3>{this.props.name}</h3>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="task-entry">Enter a task: </label>
          <input
            type="text"
            id="task-entry"
            name="task-entry"
            value={this.state.inputVal}
            onChange={this.handleInputChange}
          />
          <button type="submit">Submit</button>
        </form>
        <h4>All the tasks!</h4>
        <ul>
          {this.state.todos.map((todo) => (
            <li key={todo}>{todo}
              <button onClick={() => this.handleDelete(todo)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
        <Count todos={this.state.todos} />
      </section>
    );
  }
}

export default ClassInput;
