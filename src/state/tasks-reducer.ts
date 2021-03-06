import {TasksStateType} from '../App';
import {v1} from 'uuid';
import {AddTodolistActionType, RemoveTodolistActionType} from './todolists-reducer';

export type RemoveTaskACType = {
    type: 'REMOVE-TASK'
    todolistId: string
    taskId: string
}

export type AddTaskACType = {
    type: 'ADD-TASK'
    title: string
    todolistId: string
}

export type ChangeStatusACType = {
    type: 'CHANGE-STATUS'
    taskId: string
    isDone: boolean
    todolistId: string
}

export type ChangeTitleACType = {
    type: 'CHANGE-TITLE'
    taskId: string
    title: string
    todolistId: string
}

type ActionsType =
    RemoveTaskACType
    | AddTaskACType
    | ChangeStatusACType
    | ChangeTitleACType
    | AddTodolistActionType
    | RemoveTodolistActionType

export let todolistId1 = v1();
export let todolistId2 = v1();

const initialState: TasksStateType = {
    [todolistId1]: [
        {id: v1(), title: "HTML&CSS", isDone: true},
        {id: v1(), title: "JS", isDone: true}
    ],
    [todolistId2]: [
        {id: v1(), title: "Milk", isDone: true},
        {id: v1(), title: "React Book", isDone: true}
    ]
}

export const tasksReducer = (state: TasksStateType = initialState, action: ActionsType): TasksStateType => {
    switch (action.type) {
        case 'REMOVE-TASK': {
            // const stateCopy = {...state}
            // const tasks = state[action.todolistId]
            // const filteredTasks = tasks.filter(t => t.id != action.taskId)
            // stateCopy[action.todolistId] = filteredTasks
            return {...state, [action.todolistId]: state[action.todolistId].filter(t => t.id != action.taskId)}
        }
        case 'ADD-TASK' : {
            // const stateCopy = {...state}
            // const tasks = stateCopy[action.todolistId]
            // const newTasks =[{id: v1(), title: action.title, isDone: false}, ...tasks]
            // stateCopy[action.todolistId] = newTasks
            return {
                ...state,
                [action.todolistId]: [{id: v1(), title: action.title, isDone: false}, ...state[action.todolistId]]
            }
        }
        case 'CHANGE-STATUS': {
            // const stateCopy = {...state}
            // const tasks = state[action.todolistId].find(i => i.id === action.taskId)
            // if (tasks) {
            //     tasks.isDone = action.isDone
            // }
            return {
                ...state,
                [action.todolistId]: state[action.todolistId].map(i => i.id === action.taskId ? {
                    ...i,
                    isDone: action.isDone
                } : i)
            }
        }
        case 'CHANGE-TITLE': {
            // const stateCopy = {...state}
            // const tasks = state[action.todolistId].find(i => i.id === action.taskId)
            // if (tasks) {
            //     tasks.title = action.title
            // }
            return {
                ...state,
                [action.todolistId]: state[action.todolistId].map(i => i.id === action.taskId ? {
                    ...i,
                    title: action.title
                } : i)
            }
        }
        case 'ADD-TODOLIST': {
            const stateCopy = {...state}
            stateCopy[action.todolistId] = []
            return stateCopy
        }
        case 'REMOVE-TODOLIST' : {
            const stateCopy = {...state}
            delete stateCopy[action.id]
            return stateCopy
        }
        default:
            return state
    }
}

export const removeTaskAC = (taskId: string, todolistId: string): RemoveTaskACType => {
    return {
        type: 'REMOVE-TASK',
        todolistId: todolistId,
        taskId: taskId
    }
}

export const addTaskAC = (title: string, todolistId: string): AddTaskACType => {
    return {
        type: 'ADD-TASK',
        title: title,
        todolistId: todolistId
    }
}

export const changeStatusAC = (taskId: string, isDone: boolean, todolistId: string): ChangeStatusACType => {
    return {
        type: 'CHANGE-STATUS',
        taskId: taskId,
        isDone: isDone,
        todolistId: todolistId
    }
}

export const changeTitleAC = (taskId: string, title: string, todolistId: string): ChangeTitleACType => {
    return {type: 'CHANGE-TITLE', taskId, title, todolistId}
}