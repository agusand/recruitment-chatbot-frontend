import { useContext } from 'react';

import { SearchService } from './SearchService.context';
import type SearchServiceValue from './SearchServiceValue';

export const useSearchService = () => {
  return useContext(SearchService) as SearchServiceValue;
};
