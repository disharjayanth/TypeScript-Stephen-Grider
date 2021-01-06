import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchTodos, Todo, deleteTodo } from "../actions"
import { StoreState } from "../reducers";

export const App = () => {
    const [loading, setLoading] = useState<boolean>(false)
    const dispatch = useDispatch()
    const todos: Todo[] = useSelector((state: StoreState) => state.todos)

    useEffect(() => {
        if (todos.length > 1) {
            setLoading(false)
        }
    }, [todos])

    const onButtonClick = (): void => {
        setLoading(true)
        dispatch(fetchTodos())
    }

    const onDeleteTodo = (id: number): void => {
        dispatch(deleteTodo(id))
    }

    const renderList = (): JSX.Element[] => {
        return  (todos.map((todo: Todo) => (
                <div key={todo.id} onClick={() => onDeleteTodo(todo.id)}>
                    <h2>{todo.id}</h2>
                    <p>{todo.title}</p>
                    <p>{todo.completed}</p>
                    <hr />
                </div>
            )))
    }

    return (
            <div>
                <button onClick={onButtonClick}>Fetch</button>
                { loading ? <div><p>Loading..</p></div> : renderList() }
            </div>
        )
}