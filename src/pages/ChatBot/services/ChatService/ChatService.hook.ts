import { useContext } from 'react';

import { ChatService } from './ChatService.context';
import type ChatServiceValue from './ChatServiceValue';

export const useChatService = () => {
  return useContext(ChatService) as ChatServiceValue;
};
