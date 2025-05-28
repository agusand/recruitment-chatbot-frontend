import type { ReactNode } from 'react';

export default interface SideBarItemProps {
  title: string;
  href: string;
  icon?: ReactNode;
  active?: boolean;
}
