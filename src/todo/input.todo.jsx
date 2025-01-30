const InputTodo = () => {

    return (
        <div>
            <div>Add new todo</div>
            <div style={{ display: "flex" }}>
                <input type="text" />
                <button style={{ marginLeft: "5px" }} type="button">Save</button>
            </div>
        </div>
    )

}

export default InputTodo;   