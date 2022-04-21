import {FilterValuesType, TodolistType} from '../App';
import {v1} from 'uuid';
import {todolistId1, todolistId2} from './tasks-reducer';

export type RemoveTodolistActionType = {
    type: 'REMOVE-TODOLIST',
    id: string
}
export type AddTodolistActionType = {
    type: 'ADD-TODOLIST',
    title: string
    todolistId: string
}
export type ChangeTodolistTitleActionType = {
    type: 'CHANGE-TODOLIST-TITLE',
    id: string,
    title: string
}
export type ChangeTodolistFilterActionType = {
    type: 'CHANGE-TODOLIST-FILTER',
    id: string,
    filter: FilterValuesType
}

type ActionType =
    RemoveTodolistActionType
    | AddTodolistActionType
    | ChangeTodolistTitleActionType
    | ChangeTodolistFilterActionType

const initialState: TodolistType[] = [
    {id: todolistId1, title: "What to learn", filter: "all"},
    {id: todolistId2, title: "What to buy", filter: "all"}
]

export const todolistsReducer = (state: Array<TodolistType> = initialState, action: ActionType): Array<TodolistType> => {
    switch (action.type) {
        case 'REMOVE-TODOLIST' :  {
            return state.filter(t => t.id != action.id)
        }
        case 'ADD-TODOLIST' :  {
            return [...state, {id: action.todolistId, title: action.title, filter: 'all'}]
        }
        case 'CHANGE-TODOLIST-TITLE' :  {
            return state.map(t => t.id === action.id ? {...t, title: action.title}: t)
        }
        case 'CHANGE-TODOLIST-FILTER' :  {
            return state.map(t => t.id === action.id ? {...t, filter: action.filter}: t)
        }
        default:
            return state
    }
}

export const removeTodolistAC = (todolistId: string): RemoveTodolistActionType => {
    return {
        type: 'REMOVE-TODOLIST',
        id: todolistId
    }
}

export const addTodolistAC = (title: string, id: string): AddTodolistActionType => {
    return {
        type: 'ADD-TODOLIST',
        title: title,
        todolistId: id
    }
}
export const changeTodolistTitleAC = (todolistId2: string, newTodolistTitle: string): ChangeTodolistTitleActionType => {
    return {
        type: 'CHANGE-TODOLIST-TITLE',
        id: todolistId2,
        title: newTodolistTitle
    }
}
export const changeTodolistFilterAC = (newFilter: FilterValuesType, todolistId2: string ): ChangeTodolistFilterActionType => {
    return {
        type: 'CHANGE-TODOLIST-FILTER' as const,
        id: todolistId2,
        filter: newFilter
    }
}

