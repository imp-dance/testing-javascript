export const validateArrayOfTypes = (
  value: unknown[],
  typeName: string
): boolean => {
  let allTypesAreCorrect = true;
  value.forEach((item) => {
    if (typeof item !== typeName) {
      allTypesAreCorrect = false;
      throw new Error(`Incorrect type '${typeof item}' !== '${typeName}'`);
    }
  });
  return allTypesAreCorrect;
};
