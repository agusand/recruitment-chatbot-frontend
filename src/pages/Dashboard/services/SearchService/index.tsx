import { useState } from 'react';

import { HIGHER_LIMIT } from './SearchService.constants.ts';
import { SearchService } from './SearchService.context.ts';

import type GenericProps from 'types/GenericProps';

export function SearchServiceProvider({ children }: GenericProps) {
  const [inputValue, setInputValue] = useState<string>('');
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const [isHigher, setIsHigher] = useState<boolean>(false);

  return (
    <SearchService.Provider
      value={{
        HIGHER_LIMIT,
        inputValue,
        setInputValue,
        isDisabled,
        setIsDisabled,
        isHigher,
        setIsHigher,
      }}
    >
      {children}
    </SearchService.Provider>
  );
}
