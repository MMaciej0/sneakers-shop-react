export const forEachFilter = (data, forEachArr, property) => {
  let output = [];
  forEachArr.forEach((prop) => {
    output = [
      ...output,
      ...data.filter(
        (item) => item[property].toLowerCase() === prop.toLowerCase()
      ),
    ];
  });
  return output;
};
