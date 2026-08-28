import { FC } from 'react';
import { Icon } from '../Icon';
import type { IconProps } from '../Icon.types';

type IconComponent = FC<Omit<IconProps, 'children'>>;

export const DonutChartIcon: IconComponent = (props) => (
  <Icon {...props}>
    <circle cx="12" cy="12" r="8" />
    <circle cx="12" cy="12" r="3.5" />
    <path d="M12 4v5" />
  </Icon>
);

export const LineChartIcon: IconComponent = (props) => (
  <Icon {...props}>
    <path d="M4 18V6" />
    <path d="M4 18h16" />
    <path d="M6 14l4-4 3 2 5-6" />
  </Icon>
);

export const AreaChartIcon: IconComponent = (props) => (
  <Icon {...props}>
    <path d="M4 18V6" />
    <path d="M4 18h16" />
    <path d="M6 15l4-5 3 2 5-7v11H6z" />
  </Icon>
);

export const RadarChartIcon: IconComponent = (props) => (
  <Icon {...props}>
    <path d="M12 3l8 6-3 9H7L4 9z" />
    <path d="M12 7l4.5 3.2-1.7 5.1H9.2L7.5 10.2z" />
    <circle cx="12" cy="12" r="1" />
  </Icon>
);

export const FunnelChartIcon: IconComponent = (props) => (
  <Icon {...props}>
    <path d="M4 5h16l-5 6v6l-6 3v-9z" />
  </Icon>
);

export const ScatterChartIcon: IconComponent = (props) => (
  <Icon {...props}>
    <path d="M4 18V6" />
    <path d="M4 18h16" />
    <circle cx="8" cy="13" r="1.2" />
    <circle cx="12" cy="9" r="1.2" />
    <circle cx="16" cy="11" r="1.2" />
    <circle cx="18" cy="7" r="1.2" />
  </Icon>
);

export const HistogramIcon: IconComponent = (props) => (
  <Icon {...props}>
    <path d="M4 20V4" />
    <path d="M4 20h16" />
    <path d="M7 20V12h3v8M12 20V8h3v12M17 20v-6h3v6" />
  </Icon>
);

export const CandlestickIcon: IconComponent = (props) => (
  <Icon {...props}>
    <path d="M7 5v4M7 15v4" />
    <path d="M6 9h2v6H6z" />
    <path d="M17 4v5M17 14v6" />
    <path d="M16 9h2v5h-2z" />
  </Icon>
);

export const GaugeChartIcon: IconComponent = (props) => (
  <Icon {...props}>
    <path d="M5 16a8 8 0 1 1 14 0" />
    <path d="M12 16l4-6" />
    <circle cx="12" cy="16" r="1.2" />
  </Icon>
);

export const StackedBarIcon: IconComponent = (props) => (
  <Icon {...props}>
    <path d="M6 20V10h4v10M14 20V6h4v14" />
    <path d="M6 14h4M14 12h4" />
  </Icon>
);

export const CakeIcon: IconComponent = (props) => (
  <Icon {...props}>
    <path d="M12 3v4" />
    <path d="M10 7c0 1.5 4 1.5 4 0" />
    <path d="M6 11c0-2 12-2 12 0v7H6z" />
    <path d="M6 15c3-1 9-1 12 0" />
    <path d="M9 11v7M15 11v7" />
  </Icon>
);

export const WaterfallChartIcon: IconComponent = (props) => (
  <Icon {...props}>
    <path d="M4 20V4" />
    <path d="M4 20h16" />
    <path d="M7 8h3v5H7zM12 11h3v4h-3zM17 13h3v5h-3z" />
  </Icon>
);

export const PolarChartIcon: IconComponent = (props) => (
  <Icon {...props}>
    <circle cx="12" cy="12" r="8" />
    <circle cx="12" cy="12" r="4" />
    <path d="M12 4v16M4 12h16" />
    <path d="M12 12l5-3" />
  </Icon>
);

export const HeatmapGridIcon: IconComponent = (props) => (
  <Icon {...props}>
    <rect x="4" y="4" width="4" height="4" rx="0.8" />
    <rect x="10" y="4" width="4" height="4" rx="0.8" />
    <rect x="16" y="4" width="4" height="4" rx="0.8" />
    <rect x="4" y="10" width="4" height="4" rx="0.8" />
    <rect x="10" y="10" width="4" height="4" rx="0.8" />
    <rect x="16" y="10" width="4" height="4" rx="0.8" />
    <rect x="4" y="16" width="4" height="4" rx="0.8" />
    <rect x="10" y="16" width="4" height="4" rx="0.8" />
    <rect x="16" y="16" width="4" height="4" rx="0.8" />
  </Icon>
);

export const SparklineIcon: IconComponent = (props) => (
  <Icon {...props}>
    <path d="M3 16l5-6 4 3 4-7 5 4" />
    <circle cx="21" cy="10" r="1.2" />
  </Icon>
);

export const TimelineChartIcon: IconComponent = (props) => (
  <Icon {...props}>
    <path d="M4 8h10" />
    <path d="M8 12h12" />
    <path d="M6 16h8" />
    <circle cx="4" cy="8" r="1.2" />
    <circle cx="8" cy="12" r="1.2" />
    <circle cx="6" cy="16" r="1.2" />
  </Icon>
);

export const RoseChartIcon: IconComponent = (props) => (
  <Icon {...props}>
    <path d="M12 12l6-2A8 8 0 0 0 12 4z" />
    <path d="M12 12l2 7A8 8 0 0 0 20 14z" />
    <path d="M12 12L5 15A8 8 0 0 0 10 20z" />
    <path d="M12 12L7 6A8 8 0 0 0 4 12z" />
  </Icon>
);
