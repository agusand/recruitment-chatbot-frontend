import { useCallback, useEffect, useMemo } from 'react';

import type { Message, OnChatBotSubmitListener } from './types';
import { INPUT_NAME, MIN_LENGTH } from './ChatService.constants.ts';
import { ChatService } from './ChatService.context.ts';

import useMessagesManager from './hooks/useMessagesManager';
import useCreateIndicator from './hooks/useCreateIndicators';

import type GenericProps from 'types/GenericProps';

import useMockUser from 'utils/useMockUser';

export function ChatServiceProvider({ children }: GenericProps) {
  const user = useMockUser();

  const { messages, setChatAnswers, isBotWriting, chatHasFinished } = useMessagesManager(user);
  const { createIndicator } = useCreateIndicator(user.positionApplied);

  const onChatFormSubmit = useCallback<OnChatBotSubmitListener>(
    event => {
      event.preventDefault();

      const form = event.target as HTMLFormElement;
      const formData = new FormData(form);

      const answer = formData.get(INPUT_NAME)?.valueOf();

      if (typeof answer === 'string') {
        setChatAnswers(answer);
      }
    },
    [setChatAnswers],
  );

  useEffect(() => {
    if (chatHasFinished) {
      createIndicator();
    }
  }, [chatHasFinished, createIndicator]);

  const finalMessages = useMemo<Message[]>(() => {
    if (chatHasFinished) {
      return [
        ...messages,
        { children: 'The chat has finished, thanks for your time!', emitter: 'bot' },
      ];
    }

    return messages;
  }, [chatHasFinished, messages]);

  return (
    <ChatService.Provider
      value={{
        onChatFormSubmit,
        INPUT_NAME,
        MIN_LENGTH,
        messages: finalMessages || [],
        isBotWriting,
        chatHasFinished,
      }}
    >
      {children}
    </ChatService.Provider>
  );
}
