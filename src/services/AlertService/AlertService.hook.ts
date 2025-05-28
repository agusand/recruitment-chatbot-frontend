import { useContext } from 'react';

import { AlertService } from './AlertService.context';
import type AlertServiceValue from './AlertServiceValue';

export const useAlertService = () => {
  return useContext(AlertService) as AlertServiceValue;
};
