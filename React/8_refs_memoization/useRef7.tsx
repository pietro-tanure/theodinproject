// animate DOM elements

export const RefExample = () => {
  const boxRef = React.useRef(null)
  const [isAnimating, setIsAnimating] = React.useState(false)
 
  function handleStartAnimation() {
    setIsAnimating(true)
    boxRef.current.style.transform = 'translateX(300px)'
    setTimeout(() => {
      setIsAnimating(false)
      boxRef.current.style.transform = ''
    }, 1000)
  }
 
  return (
    <div className="App">
      <div className={`box ${isAnimating ? 'is-animating' : ''}`} ref={boxRef}>
        <p>Hello, I'm an animated box!</p>
      </div>
      <button onClick={handleStartAnimation}>Start Animation</button>
    </div>
  )
}