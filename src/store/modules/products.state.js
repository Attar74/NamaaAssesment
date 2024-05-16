import DefaultProducts from '@/constants/defaultProducts.js';

const ProductModule = {
  state: {
    Products: JSON.parse(localStorage.getItem('Products'))?.length
      ? JSON.parse(localStorage.getItem('Products'))
      : DefaultProducts,
  },
  mutations: {
    addNewProduct(state, newProduct) {
      state.Products = [newProduct, ...state.Products];
      localStorage.setItem('Products', JSON.stringify(state.Products));
    },
    async updateProduct(state, updatedProduct) {
      try {
        const updatedProductIndex = state.Products.findIndex((Product) => {
          return Product.id === updatedProduct.id;
        });
        state.Products[updatedProductIndex] = { ...updatedProduct };
        localStorage.setItem('Products', JSON.stringify(state.Products));
      } catch {}
    },
  },
  actions: {
    addNewProductDispatche(context, newProduct) {
      context.commit('addNewProduct', newProduct);
    },
    updateProductDispatche(context, updatedProduct) {
      context.commit('updateProduct', updatedProduct);
    },
  },
  getters: {
    ProductsList(state) {
      return state.Products;
    },
    modalStateGetter(state) {
      return state.modalState;
    },
    ProductToBeEditedGetters(state) {
      return state.ProductToBeEdited;
    },
  },
};

export default ProductModule;
