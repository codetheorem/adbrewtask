import apiClient from "./api"

async function addTodo (todo) {
    return apiClient.post("/todos/", {todo: todo})
}

async function getTodos () {
    const response = await apiClient.get("/todos/")
    return response.data
}

export  {
    addTodo,
    getTodos
}