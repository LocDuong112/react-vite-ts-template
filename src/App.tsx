
// import './App.css'

import InputTodo from "./todo/input.todo"

function App() {

  const name = "Loc";
  const age = 25;
  const info = {
    gender: "Male",
    address: "Home"
  }

  const todos = ["todo 1", "todo 2", "todo 3"];

  return (
    <div>
      <InputTodo
        name={name}
        age={age}
        info={info}
      />

      <ul>
        {
          todos.map((item, idx) => {
            return (
              <li key={idx}>{item}</li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default App
