import { useQueryClient, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { QueryService } from './QueryService.context';

import type GenericProps from 'types/GenericProps';
import useMakeRequest from './hooks/useMakeRequest';

function QueryServiceProviderChild({ children }: GenericProps) {
  const { makeRequest: makeApiRequest } = useMakeRequest(import.meta.env.VITE_API_URL || '');

  const queryClient = useQueryClient();
  return (
    <QueryService.Provider
      value={{
        queryClient,
        makeApiRequest,
      }}
    >
      {children}
    </QueryService.Provider>
  );
}

export function QueryServiceProvider({ children }: GenericProps) {
  return (
    <QueryClientProvider client={new QueryClient()}>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      <QueryServiceProviderChild>{children}</QueryServiceProviderChild>
    </QueryClientProvider>
  );
}
