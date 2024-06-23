"use client";

import { useTodos, useTodosId } from "@/services/tanstack-query/queries"

export default function Todo() {

    const todosIds = useTodosId();
    const todos = useTodos(todosIds.data);

    return (
        <section className="container">
            {/* <div className="flex fle-col items-center justify-center mx-auto items-center pb-10 gap-1">
                {todosIds.data?.map((id) => {
                    return (
                        <p key={id}>todo id: {id}</p>
                    )
                })}
            </div> */}
            <div className="flex flex-wrap gap-6 text-center">
                {todos.map(({ data }) => {
                    return (
                        <ul key={data?.id}>
                            <li>
                                Id: {data?.id}
                            </li>
                            <li>
                                Title: {data?.title}
                            </li>
                            <li>
                                Description: {data?.description}
                            </li>
                        </ul>
                    )
                })}
            </div>
        </section>
    )
}