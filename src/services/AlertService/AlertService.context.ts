import { createContext } from 'react';

import type AlertServiceValue from './AlertServiceValue';

export const AlertService = createContext<AlertServiceValue | null>(null);
