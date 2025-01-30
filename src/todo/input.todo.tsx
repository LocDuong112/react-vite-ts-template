interface IProps {
    name: String;
    age: number;
    info: {
        gender: String;
        address: String;
    }

    abc?: String;
}

const InputTodo = (props: IProps) => {

    const { age, name } = props;

    return (
        <div>
            <div>Add new todo</div>
            <div>Name: {name} </div>
            <div>Age: {age} </div>
            <div style={{ display: "flex" }}>
                <input type="text" />
                <button style={{ marginLeft: "5px" }} type="button">Save</button>
            </div>
        </div>
    )

}

export default InputTodo;   