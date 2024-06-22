import { useState } from "react"
import Button from "../../components/button"
import uuid4 from "uuid4";

function TodoForm(props) {
    const {addTodo} = props
    const [ todo,setTodo ] = useState({
        title:"",
        description:""
        
    })

    const {title, description} = todo

    const handleChange = (e) => {
        const name = e.target.name

        setTodo({...todo,[name]:e.target.value})
    };
  
    const handleSubmit = (e) => {
        e.preventDefault()
        const newTodo = {...todo, completed:false, id:uuid4()}
        addTodo(newTodo)
        setTodo({
            title:"",
            description:""
        })
    };
    return (
        <form onSubmit={handleSubmit}>

            <div>

                <label htmlFor="title">Title</label>
                <input type="text" value = {title} id="title" name="title" className="border" onChange={handleChange}/>
            
            </div>
            <div>
            <label htmlFor="description">Description</label>
            <input type="text" value = {description} id="description" name = "description" className="border" onChange={handleChange}/>
            
            </div>
            <Button title = "Add" />

        </form>
    )
}

export default TodoForm