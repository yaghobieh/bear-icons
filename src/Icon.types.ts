import type { SVGAttributes, ReactNode } from 'react';

export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface IconProps extends SVGAttributes<SVGElement> {
  id?: string;
  size?: IconSize | number;
  color?: string;
  strokeWidth?: number;
  spin?: boolean;
  testId?: string;
  children: ReactNode;
}
