import { useQuery } from '@tanstack/react-query';
import { useCallback, useMemo } from 'react';

import type { GetChatAnswersMethod } from './types';

import { useQueryService } from 'services/QueryService/QueryService.hook.ts';

export default function useGetAnswers(email: string) {
  const { makeApiRequest } = useQueryService();

  const getChatAnswers = useCallback<GetChatAnswersMethod>(async () => {
    const response = await makeApiRequest({ endpointRoute: `answer/${email}`, method: 'GET' });

    return response?.status === 200 ? response.json() : null;
  }, [email, makeApiRequest]);

  const { isPending, isError, data, error } = useQuery({
    queryKey: ['getChatAnswers'],
    queryFn: getChatAnswers,
  });

  const lastAnswerIndex = useMemo<number | null>(() => {
    if (data && Array.isArray(data) && data.length) {
      return data[data.length - 1].questionId;
    }

    return 1;
  }, [data]);

  return {
    isLoading: isPending,
    isError,
    existingChatAnswers: data || [],
    error,
    lastAnswerIndex,
  };
}
