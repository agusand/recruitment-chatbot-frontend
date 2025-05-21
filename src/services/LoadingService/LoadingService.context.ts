import { createContext } from 'react';

import type LoadingServiceValue from './LoadingServiceValue';

export const LoadingService = createContext<LoadingServiceValue | null>(null);
