import { useQuery } from '@tanstack/react-query';
import { useCallback } from 'react';

import type { Indicator } from 'pages/Dashboard/types';

import { useQueryService } from 'services/QueryService/QueryService.hook.ts';

export default function useGetUserIndicators(positionId: number, activeUser?: string) {
  console.log(positionId);
  const { makeApiRequest } = useQueryService();

  const getUsersIndicators = useCallback(async () => {
    const response =
      typeof activeUser !== 'undefined'
        ? await makeApiRequest({
            endpointRoute: `indicators/${activeUser}`,
            method: 'GET',
          })
        : undefined;

    return response?.status === 200 ? response.json() : null;
  }, [activeUser, makeApiRequest]);

  const { isLoading, data, isError, error } = useQuery({
    queryKey: ['getUsersIndicators', activeUser],
    queryFn: getUsersIndicators,
  });

  return { isLoading, data: (data || []) as Indicator[], isError, error };
}
