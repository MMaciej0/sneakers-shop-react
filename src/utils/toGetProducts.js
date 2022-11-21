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

export const getCategories = (data, sex) => {
  let selectedItems;
  if (!sex || sex === 'all') {
    selectedItems = data;
  } else {
    selectedItems = getProductsBySex(data, sex);
  }
  const uniqueCategories = [
    ...new Set(selectedItems.map((item) => item.category)),
  ];
  const output = uniqueCategories.map((category) => ({
    category,
    selected: false,
  }));
  return output;
};

export const getSubmenuItems = (data, value) => {
  const selectedItems = getProductsBySex(data, value);
  const category = getCategories(data, value);
  let brand = selectedItems
    .map((item) => {
      return {
        id: item._id,
        name: item.brand,
        image: item.brand_logo,
        model: [],
      };
    })
    .reduce((unique, brand) => {
      if (!unique.some((item) => item.name === brand.name)) {
        unique.push(brand);
      }
      return unique;
    }, [])
    .map((item) => {
      for (let x of selectedItems) {
        if (x.brand === item.name) {
          item.model.push(x.name);
        }
      }
      return item;
    });

  return { category, brand };
};

export const findProduct = (cart, id, size) => {
  return cart
    .filter((item) => item._id === id)
    .filter((item) => item.countInStock.size === size);
};
