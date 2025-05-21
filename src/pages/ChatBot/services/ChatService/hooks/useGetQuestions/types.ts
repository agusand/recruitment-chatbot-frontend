import type { Question } from '../../types';

export type GetChatQuestionsMethod = () => Promise<Question[] | null>;
