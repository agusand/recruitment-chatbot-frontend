import { useContext } from 'react';

import { LoadingService } from './LoadingService.context';
import type LoadingServiceValue from './LoadingServiceValue';

export const useLoadingService = () => {
  return useContext(LoadingService) as LoadingServiceValue;
};
