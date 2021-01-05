import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchTodos, Todo } from "../actions"
import { StoreState } from "../reducers";

export const App = () => {
    const dispatch = useDispatch()
    const todos: Todo[] = useSelector((state: StoreState) => state.todos)

    // useEffect(() => {
    //     dispatch(fetchTodos())
    // }, [dispatch])

    const onButtonClick = (): void => {
        dispatch(fetchTodos())
    }

    const renderList = (): JSX.Element[] => {
        return  (todos.map((todo: Todo) => (
                <div key={todo.id}>
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
                { renderList() }
            </div>
        )
}