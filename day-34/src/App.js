import './App.css';
import HelloWorld from "./HelloWord"

function App() {
  const user = {
    firstName: "Haper",
    lastName: "Perez"
  }
  function formatName(user) {
    return user.firstName + " " + user.lastName
  }
  const name = "Bilguun"
  // const element = (<h1> Hello, {formatName(user)}! </h1>)

  const customStyle = {
    color: "#2ecc71",
    fontSize: "26px",
  }

  const element = (<h1 style={customStyle}> Hello, Teacher</h1>)
  const secondElement = (<p className="my-text">My Next Element</p>)
  return (
    <div>
      {element}
      {secondElement}
      <HelloWorld />
    </div>
  )
}

export default App;
