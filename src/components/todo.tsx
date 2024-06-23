"use client";

import useTodosId from "@/services/tanstack-query/queries"

export default function Todo() {

    const todosIdQuery = useTodosId();

    return (
        <div className="container" >
            {todosIdQuery.data?.map((id) => {
                return (
                    <p key={id}>todo id: {id}</p>
                )
            })}
        </div>
    )
}