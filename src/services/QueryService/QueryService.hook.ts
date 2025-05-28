import { useContext } from 'react';

import { QueryService } from './QueryService.context';
import type QueryServiceValue from './QueryServiceValue';

export const useQueryService = () => {
  return useContext(QueryService) as QueryServiceValue;
};
