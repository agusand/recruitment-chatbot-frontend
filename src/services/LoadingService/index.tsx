import { useCallback } from 'react';

import { loadingManagerInstance } from './LoadingService.constants.ts';
import { LoadingService } from './LoadingService.context.ts';
import type { Screen } from './types';

import type GenericProps from 'types/GenericProps';
import useScreensMapChange from './hooks/useScreensMapChange';

export function LoadingServiceProvider({ children }: GenericProps) {
  const { screensMap } = useScreensMapChange(loadingManagerInstance);

  const addLoadingScreen = useCallback((screen: Screen) => {
    return loadingManagerInstance.addLoadingScreen(screen);
  }, []);

  const removeLoadingScreen = useCallback((id: number) => {
    return loadingManagerInstance.removeLoadingScreen(id);
  }, []);

  return (
    <LoadingService.Provider value={{ screensMap, addLoadingScreen, removeLoadingScreen }}>
      {children}
    </LoadingService.Provider>
  );
}
