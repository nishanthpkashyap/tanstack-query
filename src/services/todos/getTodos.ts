import { Todo } from "@/types/todo";
import { axios } from "@/services";

export async function getTodo(id: number) {
    return (await axios.get<Todo>(`todos/${id}`)).data;
}