import { useState } from "react";
import { useEffect } from "react";
import TodoContent from "./TodoContent";

const Todo = () => {
  const [todos, addTodo] = useState([{title: "test1"}, {title: "test2"}])
  
  const createTodo = (title) => {
    addTodo([...todos, title])
  }

    return(
      <div>
        <button onClick={() => {createTodo({title: "Added Todo!!"})}} style={{height: "30px", width: "30px"}}></button>
        <ul id="todo_list">
          {todos.map((todo) => {
            return <TodoContent todo={todo}/>
          })}
        </ul>
      </div>
    )
}

export default Todo;
