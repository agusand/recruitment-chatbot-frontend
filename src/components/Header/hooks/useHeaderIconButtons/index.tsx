import { useCallback, useState, useMemo, type MouseEventHandler } from 'react';

import type { HeaderIconButtonProps } from './types';

import UserIcon from 'components/UserIcon';

export default function useHeaderIconButtons() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const onUserClick = useCallback<MouseEventHandler>(() => {
    setIsMenuOpen(!isMenuOpen);
  }, [isMenuOpen]);

  const iconButtons = useMemo<HeaderIconButtonProps[]>(() => {
    const props = [
      {
        alt: 'Account',
        component: (
          <>
            <UserIcon />
          </>
        ),
        onClick: onUserClick,
      },
    ];

    return props;
  }, [onUserClick]);

  return { iconButtons };
}
