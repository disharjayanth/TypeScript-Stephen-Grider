import { Todo, FetchTodoAction } from "../actions";
import { ActionTypes } from "../actions/types";

export const todosReducer = (state: Todo[] = [], action: FetchTodoAction) => {
    switch (action.type) {
        case ActionTypes.fetchTodo:
            return action.payload;
        default:
            return state;
    }
};