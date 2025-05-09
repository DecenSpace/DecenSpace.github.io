import { ReactNode, useMemo } from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

export default function ReactQueryProvider({ children }: { children: ReactNode }) {

    const client = useMemo(() => new QueryClient(), []);

    return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}
