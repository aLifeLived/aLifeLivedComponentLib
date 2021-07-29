export const opacity = (color: string, opacity: number) => {
  return `${color}${Math.floor(opacity * 255).toString(16)}`;
};
