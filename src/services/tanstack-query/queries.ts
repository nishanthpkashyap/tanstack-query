import { useQuery } from "@tanstack/react-query";
import { getTodosId } from "../todos/getId";

export default function useTodosId(){
    return useQuery({
        queryKey: ["todosId"],
        queryFn: getTodosId,
    })
}