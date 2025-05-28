import { useEffect } from 'react';

import useCreateProfile from './hooks/useCreateProfile';

import type User from 'types/User';

const user = {
  first_name: 'Agustin',
  last_name: 'Andreacchi',
  email: 'agustin.andreacchi@email.com',
  is_external: true,
  positionApplied: 1,
};

export default function useMockUser(): User & { positionApplied: number } {
  const { createProfile } = useCreateProfile();

  useEffect(() => {
    createProfile(user);
  }, [createProfile]);

  return user;
}
