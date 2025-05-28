import { useQuery } from '@tanstack/react-query';
import { useCallback, useMemo } from 'react';

import type { GetChatQuestionsMethod } from './types';
import type { Question } from '../../types';

import { useQueryService } from 'services/QueryService/QueryService.hook.ts';

export default function useGetQuestions(userName: string) {
  const { makeApiRequest } = useQueryService();

  const getChatQuestions = useCallback<GetChatQuestionsMethod>(async () => {
    const response = await makeApiRequest({ endpointRoute: 'question', method: 'GET' });

    return response?.status === 200 ? response.json() : null;
  }, [makeApiRequest]);

  const { isPending, isError, data, error } = useQuery({
    queryKey: ['getChatQuestions'],
    queryFn: getChatQuestions,
  });

  const chatQuestions = useMemo<Question[]>(() => {
    if (data && !isError) {
      return data.map(question => ({
        id: question.id,
        question: question.question.replace('${userName}', userName),
      }));
    }

    return [];
  }, [data, isError, userName]);

  return { isLoading: isPending, isError, chatQuestions, error };
}
