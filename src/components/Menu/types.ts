import type { MouseEventHandler } from 'react';

export type Option = {
  onClick?: MouseEventHandler;
  tag: string;
};
