import { createContext } from 'react';
/* import { ReactQueryDevtools } from "@tanstack/react-query-devtools"; */

import type QueryServiceValue from './QueryServiceValue';

export const QueryService = createContext<QueryServiceValue | null>(null);
