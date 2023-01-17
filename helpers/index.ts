export const formatPrice = (val: number) => {
  const [dollars, cents] = val.toString().split(".");

  const dollarsWithDots = dollars
    .split("")
    .reverse()
    .reduce((acc, itm, i, arr) => {
      const isLastElem = i === arr.length - 1;
      const shouldAddSeparator = !isLastElem && (i + 1) / 3 === 1;
      return [...acc, itm, shouldAddSeparator ? "," : ""];
    }, [] as string[])
    .reverse()
    .join("");

  return `${dollarsWithDots}.${val.toFixed(2).split(".")[1]}`;
};
