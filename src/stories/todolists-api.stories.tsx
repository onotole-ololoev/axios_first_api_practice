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
    let [todoListId, setTodoListId] = useState('')
    // useEffect(() => {
    //     const todoListId = '2b2721ec-bc51-4443-a0e7-6496e0034ec5'
    //     todolistAPI.getTasks(todoListId)
    //         .then((res) => setState(res.data))
    // }, [])
    const getTasksHandler = () => {
        todolistAPI.getTasks(todoListId)
            .then(res => setState(res.data))
    }
    return <div>{JSON.stringify(state)}
    <div>
        <input type="text" placeholder={"todolistID"} onChange={(e) => {setTodoListId(e.currentTarget.value)}}/>
        <button onClick={getTasksHandler}>get tasks</button>
    </div>
    </div>
}

export const CreateTask = () => {
    const [state, setState] = useState<any>(null)
    let [todoListId, setTodoListId] = useState('')
    let [title, setTitle] = useState('')
    // useEffect(() => {
    //     const todoListId = '2b2721ec-bc51-4443-a0e7-6496e0034ec5'
    //     todolistAPI.createTask(todoListId, 'MAGIC-TASK')
    //         .then((res) => setState(res.data))
    // }, [])
    const createTaskHandler = () => {
        todolistAPI.createTask(todoListId, title)
            .then((res) => setState(res.data))
    }

    return <div>{JSON.stringify(state)}
        <div>
            <input type="text" placeholder={"todolistID"} onChange={(e) => {setTodoListId(e.currentTarget.value)}}/>
            <input type="text" placeholder={"title"} onChange={(e) => {setTitle(e.currentTarget.value)}}/>
            <button onClick={createTaskHandler}>create task</button>
        </div>
    </div>
}
export const DeleteTask = () => {
    const [state, setState] = useState<any>(null)
    let [todoListId, setTodoListId] = useState('')
    let [taskId, setTaskId] = useState('')
    const deleteTaskHandler = () => {
        todolistAPI.deleteTask(todoListId, taskId)
            .then(res => setState(res.data))
    }
    return <div>{JSON.stringify(state)}
        <div>
            <input type="text" placeholder={"todolistID"} onChange={(e) => {setTodoListId(e.currentTarget.value)}}/>
            <input type="text" placeholder={"taskID"} onChange={(e) => {setTaskId(e.currentTarget.value)}}/>
            <button onClick={deleteTaskHandler}>delete task</button>
        </div>
    </div>
}

export const UpdateTask = () => {
    const [state, setState] = useState<any>(null)
    let [description, setDescription] = useState<string>('')
    let [title, setTitle] = useState<string>('')
    let [status, setStatus] = useState<number>(0)
    let [priority, setPriority] = useState<number>(0)
    let [startDate, setStartDate] = useState<string>('')
    let [deadline, setDeadline] = useState<string>('')
    let [todoListId, setTodoListId] = useState<string>('')
    let [taskId, setTaskId] = useState<string>('')


    const updateTaskHandler = () => {
        todolistAPI.updateTask(todoListId, taskId, {
            description: description,
            title: title,
            status: status,
            priority: priority,
            startDate: startDate,
            deadline: deadline
        })
            .then((res) => {
                setState(res.data)
            })
    }
    return <div>{JSON.stringify(state)}
        <div>
            <input type="text" placeholder={"todolistID"} onChange={(e) => {setTodoListId(e.currentTarget.value)}}/>
            <input type="text" placeholder={"taskID"} onChange={(e) => {setTaskId(e.currentTarget.value)}}/>
            <input type="text" placeholder={"description"} onChange={(e) => {setDescription(e.currentTarget.value)}}/>
            <input type="text" placeholder={"title"} onChange={(e) => {setTitle(e.currentTarget.value)}}/>
            <input type="text" placeholder={"status"} onChange={(e) => {setStatus(+e.currentTarget.value)}}/>
            <input type="text" placeholder={"priority"} onChange={(e) => {setPriority(+e.currentTarget.value)}}/>
            <input type="text" placeholder={"startDate"} onChange={(e) => {setStartDate(e.currentTarget.value)}}/>
            <input type="text" placeholder={"deadline"} onChange={(e) => {setDeadline(e.currentTarget.value)}}/>
            <button onClick={updateTaskHandler}>updateTask task</button>
        </div>
    </div>
}