1. when click on size add "active" class and make available to click add to bad btn

const {selectedProducts, setSelectedProducts} = ([{id: 1, size: 39}])

useRef on sizeBtn

function on add to cart btn - get use ref value and checked if id on product + selected size is in selectedProducts

2. add to cart

take selected product from data
map it to reduce cauntInStock prop do selected size, get qty also
