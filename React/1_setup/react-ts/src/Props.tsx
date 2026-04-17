// https://www.theodinproject.com/lessons/node-path-react-new-passing-data-between-components
function Button(props: { color: string; fontSize: number; text: string }) {
  const buttomStyle = {
    color: props.color,
    fontSize: props.fontSize + 'px'
  };

  return (
    <button style={buttomStyle}>{props.text}</button>
  );
}

Button.defaultProps = {
  text: 'Click me',
  color: 'blue',
  fontSize: 12
};

function Button2({ text = "Click me", color = "blue", fontSize = 12 }: { text?: string; color?: string; fontSize?: number }) {
  const buttonStyle = {
    color: color,
    fontSize: fontSize + "px"
  };

  return <button style={buttonStyle}>{text}</button>;
}

export function App() {
  return (
    <div>
      <Button2 />
      <Button text="Hello, Red!" />
      <Button2 fontSize={32} />
    </div>
  );
}
// ----------------------------------------------

function Button3({ text = "Click Me!", color = "blue", fontSize = 12, handleClick }: {
  text?: string;
  color?: string;
  fontSize?: number;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}) {
  const buttonStyle = {
    color: color,
    fontSize: fontSize + "px"
  };

  return (
    <button onClick={handleClick} style={buttonStyle}>
      {text}
    </button>
  );
}

export function App2() {
  const handleButtonClick = (url: string) => {
    return () => {
      window.location.href = url;
    };
  };

  return (
    <div>
      <Button3 handleClick={handleButtonClick("https://www.google.com")} />
    </div>
  );
}