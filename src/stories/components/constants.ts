import { QueryClient } from "@tanstack/react-query"
export const DEFAULT_QUERY_CLIENT_OPTIONS = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 10,
        refetchInterval: false,
        refetchOnReconnect: false,
        refetchOnWindowFocus: false,
        refetchIntervalInBackground: false,
        retry: (failureCount, error) => {
          if (error) {
            return true
          }
          if (failureCount > 3) {
            return false
          }
          return true
        },
      },
    },
  })