import { Todo } from "@/types/todo";
import { default as axiosInit } from "axios"

const baseURL = process.env.NEXT_PUBLIC_BACKEND_URL;
const axios = axiosInit.create({ baseURL });

export async function getTodosId() {
    return (await axios.get<Todo[]>('todos')).data.map((todo) => todo.id);
}