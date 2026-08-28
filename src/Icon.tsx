import type { IconProps } from './Icon.types';
import {
  ICON_COLOR_CURRENT,
  ICON_ROOT_CLASS,
  ICON_SIZE_MAP,
  ICON_STROKE_WIDTH,
  ICON_VIEWBOX,
} from './Icon.const';
import { cn } from './cn.utils';

export const Icon = (props: IconProps) => {
  const {
    size = 'md',
    color = ICON_COLOR_CURRENT,
    strokeWidth = ICON_STROKE_WIDTH,
    spin = false,
    className,
    children,
    testId,
    ...rest
  } = props;

  const sizeValue = typeof size === 'number' ? size : ICON_SIZE_MAP[size];

  return (
    <svg
      width={sizeValue}
      height={sizeValue}
      viewBox={ICON_VIEWBOX}
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn(ICON_ROOT_CLASS, 'bear-inline-block bear-shrink-0', spin && 'bear-animate-spin', className)}
      data-testid={testId}
      {...rest}
    >
      {children}
    </svg>
  );
};
