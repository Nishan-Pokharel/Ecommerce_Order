import TodoList from "./todo-list";
import Button from "../../components/button";
import Search from "../../components/search";



export default function Todo(){
  return(
    <div>
        <h1>Todo App</h1>
      <Search />
      <TodoList />
      <Button title="Add Todo" />
    </div>
  )
}