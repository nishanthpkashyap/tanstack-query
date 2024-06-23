import { useQueries, useQuery } from "@tanstack/react-query";
import { getTodosId } from "../todos/getIds";
import { getTodo } from "../todos/getTodos";

export function useTodosId(){
    return useQuery({
        queryKey: ["todosId"],
        queryFn: getTodosId,
    })
}

export function useTodos(ids: (number | undefined)[] | undefined){
    return useQueries({
        queries: (ids ?? []).map((id)=>{
            return {
                queryKey: ['todo', id],
                queryFn: () => getTodo(id!),
            }
        })
    })
}