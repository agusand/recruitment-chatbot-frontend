import type { ReactNode } from 'react';

import type { Emitter } from './types';

export default interface ChatMessageProps {
  readonly children: ReactNode;
  readonly emitter: Emitter;
  isPlaceholder?: boolean;
}
