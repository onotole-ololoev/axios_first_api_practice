import axios from "axios";


// const settings = {
//     withCredentials: true,
//     headers: {
//         'API-KEY': 'e82b502f-0e69-45ea-b667-be1c8f3a2192'
//     }
// }
const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {
        // Не забываем заменить API-KEY на собственный
        'API-KEY': 'e82b502f-0e69-45ea-b667-be1c8f3a2192',
    },
})
//==================== todolists types ==================
type TodolistType = {
    id: string
    addedDate: string
    order: number
    title: string
}
type CreateTodoListType = {
    resultCode: number
    messages: string[],
    fieldsErrors: Array<string>,
    data: {
        item: TodolistType
    }
}
type DeleteTodoListType = {
    data: {}
    fieldsErrors: string[]
    messages: string[]
    resultCode: number
}
type UpdateTodoListType = {
    data: {}
    fieldsErrors: string[]
    messages: string[]
    resultCode: number
}
export type ResponseType<D = {}> = {
    resultCode: number
    messages: Array<string>
    fieldsErrors: Array<string>
    data: D
}
//============= tasks types =======================
export type TaskType = {
    id: string
    title: string
    description: null | string
    completed: boolean
    status: number
    priority: number
    startDate: string
    deadline: string
    todoListId: string
    order: number
    addedDate: string
}
export type GetTaskResponseType = {
    error: null | string
    totalCount: number
    items: Array<TaskType>
}
export type UpdateTaskType = {
            description: string
            title: string
            status: number
            priority: number
            startDate: string
            deadline: string
}


export const todolistAPI = {
    getTodoLists() {
        // const promise = axios.get('https://social-network.samuraijs.com/api/1.1/todo-lists', settings)
        const promise = instance.get<TodolistType[]>('todo-lists')
        return promise
    },
    createTodoList(title: string) {
        // const promise = axios.post('https://social-network.samuraijs.com/api/1.1/todo-lists', {title: title}, settings)
        const promise = instance.post<ResponseType<{item: TodolistType}>>('todo-lists', {title: title})
        return promise
    },
    deleteTodoList(todoListId: string) {
        const promise = instance.delete<ResponseType>(`todo-lists/${todoListId}`)
        return promise
    },
    updateTodoList(todoListId: string, title: string) {
        const promise = instance.put<ResponseType>(`todo-lists/${todoListId}`, {title: title})
        return promise
    },
    //========= tasks ===============
    getTasks(todoListId: string) {
        const propmise = instance.get<GetTaskResponseType>(`todo-lists/${todoListId}/tasks`)
        return propmise
    },
    createTask(todoListId: string, title: string) {
        const promise = instance.post(`todo-lists/${todoListId}/tasks`, {title: title})
        return promise
    },
    deleteTask(todoListId: string, taskId: string) {
        const promise = instance.delete<ResponseType>(`todo-lists/${todoListId}/tasks/${taskId}`)
        return promise
    },
    updateTask(todoListId: string, taskId: string, model: UpdateTaskType) {
        const promise = instance.put<UpdateTaskType>(`todo-lists/${todoListId}/tasks/${taskId}`, model)
        return promise
    }
}