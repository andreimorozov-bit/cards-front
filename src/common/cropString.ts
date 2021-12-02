export const cropString = (value: string, chars: number): string => {
  if (value.length > chars) {
    return value.slice(0, chars - 3) + "...";
  }
  return value;
};
