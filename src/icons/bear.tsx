import { FC } from 'react';
import { Icon } from '../Icon';
import type { IconProps } from '../Icon.types';

type IconComponent = FC<Omit<IconProps, 'children'>>;

export const HoneycombIcon: IconComponent = (props) => (
  <Icon {...props}>
    <path d="M12 2l2.5 4.3v4.3l2.5 1.5 2.5-1.5V6.3L20 2h-2.5l-2.5 4.3v4.3l-2.5 1.5-2.5-1.5V6.3L6.5 2H4l2.5 4.3v4.3l2.5 1.5 2.5-1.5V6.3L12 2z" />
    <path d="M4 11l2.5 4.3v4.3l2.5 1.5 2.5-1.5v-4.3L14 11h-2.5l-2.5 4.3v4.3l-2.5 1.5-2.5-1.5v-4.3L4 11z" />
    <path d="M20 11l-2.5 4.3v4.3l-2.5 1.5-2.5-1.5v-4.3L10 11h2.5l2.5 4.3v4.3l2.5 1.5 2.5-1.5v-4.3L20 11z" />
    <path d="M12 18l2.5 4.3v4.3l2.5 1.5 2.5-1.5v-4.3L20 18h-2.5l-2.5 4.3v4.3l-2.5 1.5-2.5-1.5v-4.3L12 18z" />
  </Icon>
);

export const ClawIcon: IconComponent = (props) => (
  <Icon {...props}>
    <path d="M12 5c-1.2 0-2 1.2-2 2.5s.8 2.5 2 2.5 2-1.2 2-2.5S13.2 5 12 5z" />
    <path d="M6.5 8.5c-.8 0-1.5 1-1.5 2s.7 2 1.5 2 1.5-1 1.5-2-.7-2-1.5-2z" />
    <path d="M17.5 8.5c.8 0 1.5 1 1.5 2s-.7 2-1.5 2-1.5-1-1.5-2 .7-2 1.5-2z" />
    <path d="M4 14c-.6 0-1.2.8-1.2 1.6s.6 1.6 1.2 1.6 1.2-.8 1.2-1.6S4.6 14 4 14z" />
    <path d="M20 14c.6 0 1.2.8 1.2 1.6s-.6 1.6-1.2 1.6-1.2-.8-1.2-1.6.6-1.6 1.2-1.6z" />
    <path d="M12 14v5M8 12v3M16 12v3M5 17v1.5M19 17v1.5" />
  </Icon>
);

export const ForestIcon: IconComponent = (props) => (
  <Icon {...props}>
    <path d="M12 3L8 9h2v4H6l4 6 4-6h-4V9h2L12 3z" />
    <path d="M4 21h16M7 21v-5l2.5 3 2.5-3v5M14.5 21v-3l1.5 2 1.5-2v3" />
    <path d="M2 21h3l1.5-2 1.5 2h3" />
  </Icon>
);

export const DenIcon: IconComponent = (props) => (
  <Icon {...props}>
    <path d="M4 20V10l8-6 8 6v10" />
    <path d="M4 10h16M9 20V14h6v6" />
    <path d="M12 10v4" />
  </Icon>
);

export const SalmonIcon: IconComponent = (props) => (
  <Icon {...props}>
    <path d="M4 12c0-3 2-6 6-6s6 3 6 6-2 6-6 6-6-3-6-6z" />
    <path d="M10 6v12M7 9l2 2.5-2 2.5M17 9l-2 2.5 2 2.5" />
    <path d="M6 11c1 .5 2 .5 3 0M6 13c1 .5 2 .5 3 0" />
  </Icon>
);

export const CampfireIcon: IconComponent = (props) => (
  <Icon {...props}>
    <path d="M12 3c1.5 1.5 3 4 3 6.5a3 3 0 0 1-6 0C9 7 10.5 4.5 12 3z" />
    <path d="M12 21c-2.5-1.5-5-4-5-7.5 0-1.5.8-3 2-4 1.2 1 2 2.5 2 4 0 3.5-2.5 6-5 7.5z" />
    <path d="M12 12v2" />
  </Icon>
);

export const PineTreeIcon: IconComponent = (props) => (
  <Icon {...props}>
    <path d="M12 2l1.5 5h-3l1.5 5h-3l1.5 5h-3l1.5-5H8l1.5-5h3L12 2z" />
    <path d="M12 22v-1.5" />
  </Icon>
);

export const MountainIcon: IconComponent = (props) => (
  <Icon {...props}>
    <path d="M4 20L12 4l8 16H4z" />
    <path d="M8 20l4-8 4 8" />
  </Icon>
);

export const AnvilIcon: IconComponent = (props) => (
  <Icon {...props}>
    <path d="M5 8h14l-1 3H6z" />
    <path d="M8 11v6h8v-6" />
    <path d="M6 20h12" />
    <path d="M4 8c0-2 2-4 5-4h2" />
  </Icon>
);

export const KilnIcon: IconComponent = (props) => (
  <Icon {...props}>
    <path d="M8 21V10l4-6 4 6v11" />
    <path d="M8 14h8" />
    <path d="M10 18h4" />
  </Icon>
);

export const HarborIcon: IconComponent = (props) => (
  <Icon {...props}>
    <path d="M3 16c2 2 4 3 9 3s7-1 9-3" />
    <path d="M5 13c1.5 1.2 3.5 2 7 2s5.5-.8 7-2" />
    <path d="M12 4v9" />
    <path d="M9 7h6" />
  </Icon>
);

export const TorchIcon: IconComponent = (props) => (
  <Icon {...props}>
    <path d="M12 3c2 2 3 4 3 6a3 3 0 1 1-6 0c0-2 1-4 3-6z" />
    <path d="M10 12h4v9h-4z" />
  </Icon>
);

export const RailIcon: IconComponent = (props) => (
  <Icon {...props}>
    <path d="M4 8h16" />
    <path d="M4 16h16" />
    <path d="M8 4v16M16 4v16" />
  </Icon>
);

export const InkIcon: IconComponent = (props) => (
  <Icon {...props}>
    <path d="M14 4l6 6-9 9H5v-6z" />
    <path d="M13 5l6 6" />
    <path d="M5 20h6" />
  </Icon>
);

export const LingoIcon: IconComponent = (props) => (
  <Icon {...props}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18" />
    <path d="M12 3c2.5 3 4 6 4 9s-1.5 6-4 9c-2.5-3-4-6-4-9s1.5-6 4-9z" />
  </Icon>
);

export const SynapseIcon: IconComponent = (props) => (
  <Icon {...props}>
    <circle cx="6" cy="12" r="2" />
    <circle cx="18" cy="6" r="2" />
    <circle cx="18" cy="18" r="2" />
    <path d="M8 12h6M16 7.5l-4 3M16 16.5l-4-3" />
  </Icon>
);

export const WardenIcon: IconComponent = (props) => (
  <Icon {...props}>
    <path d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7z" />
    <path d="M9 12l2 2 4-4" />
  </Icon>
);

export const CrucibleIcon: IconComponent = (props) => (
  <Icon {...props}>
    <path d="M8 6h8l-1 10H9z" />
    <path d="M7 20h10" />
    <path d="M12 3v3" />
  </Icon>
);

export const BifrostIcon: IconComponent = (props) => (
  <Icon {...props}>
    <path d="M3 18c4-8 14-8 18 0" />
    <path d="M5 18c3.5-6 10.5-6 14 0" />
    <path d="M7 18c2.5-4 7.5-4 10 0" />
  </Icon>
);
