export const cn = (...inputs: Array<string | false | null | undefined>): string => {
  return inputs.filter((item): item is string => Boolean(item)).join(' ');
};
