export const opacity = (color: string, opacityNumber: number) => {
  return `${color}${Math.floor(opacityNumber * 255).toString(16)}`;
};
