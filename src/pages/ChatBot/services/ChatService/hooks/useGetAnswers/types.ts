import type { Answer } from '../../types';

export type GetChatAnswersMethod = () => Promise<Answer[] | null>;
