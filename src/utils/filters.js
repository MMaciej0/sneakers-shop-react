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

export const getItems = (data, property, value) => {
  return data.filter(
    (item) => item[property].toLowerCase() === value.toLowerCase()
  );
};

export const getProductsBySex = (data, value) => {
  const itemsFirst = getItems(data, 'sex', value);
  const itemsSecond = getItems(data, 'sex', 'unisex');
  const selectedItems = [...itemsFirst, ...itemsSecond];
  return selectedItems;
};

export const findProduct = (cart, id, size) => {
  return cart
    .filter((item) => item._id === id)
    .filter((item) => item.countInStock.size === size);
};
