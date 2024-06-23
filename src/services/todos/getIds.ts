import { Todo } from "@/types/todo";
import { axios } from "@/services";

export async function getTodosId() {
    return (await axios.get<Todo[]>('todos')).data.map((todo) => todo.id);
}