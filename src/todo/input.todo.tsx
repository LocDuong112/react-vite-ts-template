import { useState } from "react";

interface IProps {
    name: string;
    age: number;
    info: {
        gender: string;
        address: string;
    }

    listTodo: string[];
    setListTodo: (v: string[]) => void;
}

const InputTodo = (props: IProps) => {

    const { age, name } = props;

    const [todo, setTodo] = useState("");
    const { listTodo, setListTodo } = props;

    const handleClick = () => {
        if (!todo) {
            alert("Empty todo!!");
            return;
        }
        setListTodo([...listTodo, todo]);
        setTodo("");
    }

    return (
        <div>
            <div>Add new todo</div>
            <div>Name: {name} </div>
            <div>Age: {age} </div>
            <div>New todo: {todo}</div>
            <div style={{ display: "flex" }}>
                <input
                    type="text"
                    value={todo}
                    onChange={(event) => {
                        setTodo(event.target.value);
                    }}
                />
                <button
                    style={{ marginLeft: "5px" }}
                    type="button"
                    onClick={() => handleClick()}
                >
                    Save
                </button>
            </div>
        </div>
    )

}

export default InputTodo;   