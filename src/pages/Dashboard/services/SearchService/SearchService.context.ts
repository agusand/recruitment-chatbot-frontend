import { createContext } from 'react';

import type SearchServiceValue from './SearchServiceValue';

export const SearchService = createContext<SearchServiceValue | null>(null);
