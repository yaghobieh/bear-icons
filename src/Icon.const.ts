import type { IconSize } from './Icon.types';

export const ICON_ROOT_CLASS = 'Bear-Icon';
export const ICON_SIZE_XS = 12;
export const ICON_SIZE_SM = 16;
export const ICON_SIZE_MD = 20;
export const ICON_SIZE_LG = 24;
export const ICON_SIZE_XL = 32;
export const ICON_STROKE_WIDTH = 2;
export const ICON_VIEWBOX = '0 0 24 24';
export const ICON_COLOR_CURRENT = 'currentColor';

export const ICON_SIZE_MAP: Record<IconSize, number> = {
  xs: ICON_SIZE_XS,
  sm: ICON_SIZE_SM,
  md: ICON_SIZE_MD,
  lg: ICON_SIZE_LG,
  xl: ICON_SIZE_XL,
};
