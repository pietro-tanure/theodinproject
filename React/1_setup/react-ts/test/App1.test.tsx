// https://www.robinwieruch.de/vitest-react-testing-library/

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App1';
import userEvent from '@testing-library/user-event';

describe('App component', () => {
  // it('renders correct heading', () => {
  //   render(<App />);
  //   expect(screen.getByRole("heading").textContent).toMatch(/our first test/i);
  // });

  it("renders magnificent monkeys", () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  })

  it("renders radical rhinos after button click", async () => {
    const user = userEvent.setup();

    render(<App />);
    const button = screen.getByRole("button", { name: "Click Me" });

    await user.click(button);
    expect(screen.getByRole("heading").textContent).toMatch(/radical rhinos/i);
  })
});

//npm test App.test.tsx

// https://testing-library.com/docs/dom-testing-library/cheatsheet/
// queries
// | **Query**    | **No Match** | **1 Match** | **1+ Match** | **Await?** |
// |--------------|--------------|-------------|--------------|------------|
// | `getBy`      | throw        | return      | throw        | No         |
// | `findBy`     | throw        | return      | throw        | Yes        |
// | `queryBy`    | null         | return      | throw        | No         |
// | `getAllBy`   | throw        | array       | array        | No         |
// | `findAllBy`  | throw        | array       | array        | Yes        |
// | `queryAllBy` | []           | array       | array        | No         |