import React, {useEffect, useState} from 'react'
import axios from "axios";
import {todolistAPI} from "../api/todolist-api";

export default {
    title: 'API'
}
const settings = {
    withCredentials: true,
    headers: {
        'API-KEY': 'e82b502f-0e69-45ea-b667-be1c8f3a2192'
    }
}

export const GetTodoLists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        // здесь мы будем делать запрос и ответ закидывать в стейт.
        // который в виде строки будем отображать в div-ке
        // axios.get('https://social-network.samuraijs.com/api/1.1/todo-lists', settings)
        //     .then((res) => {
        //         setState(res.data)
        //     })
        todolistAPI.getTodoLists().then((res) => setState(res.data))
    }, [])
    return <div>{JSON.stringify(state)}</div>
}
export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        // axios.post('https://social-network.samuraijs.com/api/1.1/todo-lists', {title: 'Real Madrid!!!!!'}, settings)
        //     .then((res) => {
        //         setState(res.data)
        //     })
        todolistAPI.createTodoList('------ohhh my!----')
            .then((res)=> {
                setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todoListId = 'd668553a-e591-498f-8224-5048155937d4'
        // axios.delete(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todoListId}`, settings)
        //     .then((res) => {
        //         setState(res.data)
        //     })
        todolistAPI.deleteTodoList(todoListId)
            .then(res => setState(res.data))
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todoListId = '734e62c3-df98-4d8f-b5bc-ed1dede75d66'
        // axios.put(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todoListId}`, {title: 'Wwwwooooooooooowwwwwwwww'}, settings)
        //     .then((res) => {
        //         setState(res.data)
        //     })
        todolistAPI.updateTodoList(todoListId, 'Nnnnnooooooooo---++++++++++++++-')
            .then(res => setState(res.data))
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
//==================================================================== problem??????
export const GetTasks = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todoListId = '2b2721ec-bc51-4443-a0e7-6496e0034ec5'
        todolistAPI.getTasks(todoListId)
            .then((res) => setState(res.data))
    }, [])
    return <div>{JSON.stringify(state)}</div>
}

export const CreateTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todoListId = '2b2721ec-bc51-4443-a0e7-6496e0034ec5'
        todolistAPI.createTask(todoListId, 'MAGIC-TASK')
            .then((res) => setState(res.data))
    }, [])
    return <div>{JSON.stringify(state)}</div>
}
export const DeleteTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todoListId = '2b2721ec-bc51-4443-a0e7-6496e0034ec5'
        const taskId = '2b2573d0-34b0-4210-b394-53062a77ada0'
        todolistAPI.deleteTask(todoListId, taskId)
            .then((res) => setState(res.data))
    }, [])
    return <div>{JSON.stringify(state)}</div>
}

export const UpdateTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todoListId = '2b2721ec-bc51-4443-a0e7-6496e0034ec5'
        const taskId = '88049a71-432b-497a-a860-9caeac2c4b77'
        todolistAPI.updateTask(todoListId, taskId, 'wow, yo!!!!!!!!!!!')
            .then((res) => {
                setState(res.data)
            })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}