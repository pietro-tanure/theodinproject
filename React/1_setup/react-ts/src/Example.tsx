const today = new Date();

function formatDate(date) {
  return new Intl.DateTimeFormat(
    'en-US',
    { weekday: 'long' }
  ).format(date);
}

const person = {
  name: 'Gregorio Y. Zara',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
};

function Example() {
  const avatar = 'https://i.imgur.com/7vQD0fPs.jpg';
  const description = 'Gregorio Y. Zara';
  return (
    <div style={person.theme}>
      <h1>{person.name} title</h1>
      <svg>
        {/*camelCase; close tags; return single root element */}
        <circle cx="25" cy="75" r="20" stroke="green" strokeWidth="2" />
      </svg>
      <img
        className="avatar"
        src={avatar}
        alt={`${description} and ${formatDate(today)}.`}
      />
      <form>
        <input type="text" />
      </form>
    </div>
  )
}

export default Example;