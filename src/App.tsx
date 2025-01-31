
// import './App.css'

// db user duongminhloc201 - pPGhEl7N8a8u75jc
// mongodb+srv://duongminhloc201:pPGhEl7N8a8u75jc@cluster0.iunw5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

import { useState } from "react";
import InputTodo from "./todo/input.todo"

function App() {

  const name = "Loc";
  const age = 25;
  const info = {
    gender: "Male",
    address: "Home"
  }

  const [listTodo, setListTodo] = useState(["todo 1", "todo 2", "todo 3"])

  return (
    <div>
      <InputTodo
        name={name}
        age={age}
        info={info}
        listTodo={listTodo}
        setListTodo={setListTodo}
      />
      <ul>
        {listTodo.map((item, idx) => {
          return (
            <li key={idx}>{item}</li>
          )
        })}
      </ul>
    </div>
  )
}

export default App
