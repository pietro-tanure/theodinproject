// https://www.theodinproject.com/lessons/node-path-react-new-component-lifecycle-methods

// lifecycle: mount -> update -> unmount
// lifecycle methods
// render: runs on mount and update
// componentDidMount: runs after the component is mounted
// componentDidUpdate: runs after the component is updated
// componentWillUnmount: runs before the component is unmounted

// useEffect combines lifecycle methods
// An empty dependency array would be equivalent to componentDidMount.
// A dependency array with a value/values in it would be a combination of componentDidMount and componentDidUpdate, but only updating when dependencies change.
// No dependency array would be equivalent to componentDidMount and componentDidUpdate combined.
// A return function inside of a useEffect() hook would be equivalent to componentWillUnmount.