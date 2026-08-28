# @forgedevstack/bear-icons

SVG icon library for [Bear UI](https://bearui.com). 550+ React icons. No Bear components required.

## Install

Icons only:

```bash
npm install @forgedevstack/bear-icons
```

Bear UI (optional dependency — installed by default):

```bash
npm install @forgedevstack/bear
```

Skip icons when installing Bear (npm has no `--no-icons` flag):

```bash
npm install @forgedevstack/bear --omit=optional
# yarn: yarn add @forgedevstack/bear --ignore-optional
# pnpm: pnpm add @forgedevstack/bear --no-optional
```

## Usage

```tsx
import { SearchIcon, BearIcons } from '@forgedevstack/bear-icons';

<SearchIcon size="md" />
<BearIcons.ChevronRight size="sm" />
```

Same names from Bear:

```tsx
import { SearchIcon, BearIcons } from '@forgedevstack/bear';
```

## Peer dependency

React 18 or later.

## License

MIT
