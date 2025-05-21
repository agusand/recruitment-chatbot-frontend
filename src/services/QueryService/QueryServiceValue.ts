import { QueryClient } from '@tanstack/react-query';

import type { MakeRequestMethod } from './hooks/useMakeRequest/types';

export default interface QueryServiceValue {
  readonly queryClient: QueryClient;
  readonly makeApiRequest: MakeRequestMethod;
}
