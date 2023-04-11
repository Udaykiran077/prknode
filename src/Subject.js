
function Subject(props) { // Pass in props as an argument
        const name = props.name; // Declare props variable(s)
        const subject = props.subject; // Declare props variable(s)

      return (
        <div>
          <h1>My name is {name}.</h1>
          <p>My favorite subject is {subject}.</p>
        </div>
      );
  }
export default Subject;