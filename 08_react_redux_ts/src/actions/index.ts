import axios from "axios";
import { Dispatch } from "redux";
import { ActionTypes } from "./types";

export interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

export interface FetchTodoAction {
    type: ActionTypes.fetchTodo;
    payload: Todo[];
}

const url = "https://jsonplaceholder.typicode.com/todos";

export const fetchTodos = () => async (dispatch: Dispatch) => {
    const response = await axios.get<Todo[]>(url);

    dispatch<FetchTodoAction>({
        type: ActionTypes.fetchTodo,
        payload: response.data
    });
};