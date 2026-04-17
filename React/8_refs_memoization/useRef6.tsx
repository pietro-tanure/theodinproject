// use it to validate form inputs.
export default function FormComponent() {
  const inputRef = React.useRef(null)
  const [error, setError] = React.useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const value = inputRef.current.value

    if (!value) {
      setError(true)
    } else {
      // Submit the form
    }
  }

  const handleChange = () => {
    const value = inputRef.current.value

    if (value) {
      setError(false)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={inputRef} onChange={handleInputChange} />
      <button type="submit">Submit</button>
      {error && <p>name field cannot be blank, pleaseee!</p>}
    </form>
  )
}