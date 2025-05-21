import { createContext } from 'react';
import type ChatServiceValue from './ChatServiceValue';

export const ChatService = createContext<ChatServiceValue | null>(null);
