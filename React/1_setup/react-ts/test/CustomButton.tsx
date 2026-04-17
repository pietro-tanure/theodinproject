const CustomButton = ({ onClick }: { onClick: React.MouseEventHandler<HTMLButtonElement> }) => {
  return (
    <button onClick={onClick}>Click me</button>
  )
}

export default CustomButton;
