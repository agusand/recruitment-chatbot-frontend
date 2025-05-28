import { useCallback } from 'react';
import { useMutation } from '@tanstack/react-query';

import type { CreateAnswerMethod } from './types';
import type { Answer } from '../../types';

import { useQueryService } from 'services/QueryService/QueryService.hook.ts';

import useMockUser from 'utils/useMockUser';

export default function useCreateAnswer() {
  const { makeApiRequest } = useQueryService();

  const { email } = useMockUser();

  const createAnswer = useCallback<CreateAnswerMethod>(
    async (answer: Answer) => {
      const response = await makeApiRequest({
        endpointRoute: 'answer',
        method: 'POST',
        body: JSON.stringify({ ...answer, profile: email }),
        headers: { 'Content-Type': 'application/json' },
      });

      return response?.status === 201 ? response : null;
    },
    [email, makeApiRequest],
  );

  const { isPending, isError, mutate, error } = useMutation({
    mutationKey: ['createAnswer'],
    mutationFn: createAnswer,
  });

  return {
    isLoading: isPending,
    isError,
    createAnswer: mutate,
    error,
  };
}
