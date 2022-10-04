export const getItems = (data, property, value) => {
  return data.filter((item) => item[property] === value);
};

export const getSubmenuItems = (data, property, value) => {
  const itemsFirst = getItems(data, property, value);
  const itemsSecond = getItems(data, property, 'unisex');
  const selectedItems = [...itemsFirst, ...itemsSecond];
  const category = [...new Set(selectedItems.map((item) => item.category))];
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
