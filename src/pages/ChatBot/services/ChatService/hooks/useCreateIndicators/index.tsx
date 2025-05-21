import { useCallback } from 'react';
import { useMutation } from '@tanstack/react-query';

import type { CreateIndicatorMethod } from './types';

import { useQueryService } from 'services/QueryService/QueryService.hook.ts';

import useMockUser from 'utils/useMockUser';

export default function useCreateIndicator(positionId: number) {
  const { makeApiRequest } = useQueryService();

  const { email } = useMockUser();

  const createIndicator = useCallback<CreateIndicatorMethod>(async () => {
    const response = await makeApiRequest({
      endpointRoute: `indicators`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, positionId }),
    });

    return response?.status === 201 ? response : null;
  }, [email, makeApiRequest, positionId]);

  const { isPending, isError, mutate, error } = useMutation({
    mutationKey: ['createIndicator'],
    mutationFn: createIndicator,
  });

  return {
    isLoading: isPending,
    isError,
    createIndicator: mutate,
    error,
  };
}
