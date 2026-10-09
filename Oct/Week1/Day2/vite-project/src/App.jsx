
import './App.css'

function App() {
  let a = 10;

  return (
    <div>
      Hello

      <div>
        Welcome
      </div>

      <Home v={a} str={"this is my string"} arr={[1, 2, 3]} obj={{ name: "John", age: 20 }}/>

      <About />
    </div>
  )
}

export default App