"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools/production";
import { ReactElement, ReactNode } from "react";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: 5,
            retryDelay: 1000,
        },
    },
})

export default function QueryProvider({ children }: {children: ReactNode | ReactElement}) {
    return (
        <QueryClientProvider client={queryClient}>
          {children}
          <ReactQueryDevtools initialIsOpen={false}/>
        </QueryClientProvider>
    )
}