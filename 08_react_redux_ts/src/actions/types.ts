import { FetchTodoAction, DeleteTodoAction } from "./todos";

export enum ActionTypes {
    fetchTodo,
    deleteTodo
}

export type Action = FetchTodoAction | DeleteTodoAction;