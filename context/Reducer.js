import Cookies from "js-cookie";
export const initialState = {
  cart: Cookies.get("cart") ? JSON.parse(Cookies.get("cart")) : [],
  showCart: false,
};

// Selector
export const getCartTotal = (cart) =>
  cart?.reduce((amount, item) => item.price * item.qty + amount, 0);

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SHOW_CART":
      return {
        ...state,
        showCart: action.showCart,
      };

    case "ADD_TO_CART":
      Cookies.set("cart", JSON.stringify([...state.cart]));
      return {
        ...state,
        cart: [...state.cart, action.item],
      };

    case "REMOVE_FROM_CART":
      const index = state.cart.findIndex(
        (cartItem) => cartItem.id === action.id
      );
      let newCart = [...state.cart];

      if (index >= 0) {
        newCart.splice(index, 1);
      } else {
        console.warn(
          `Cant remove the product (id: ${action.id})as its not in cart`
        );
      }
      Cookies.set("cart", JSON.stringify(newCart));

      return {
        ...state,
        cart: newCart,
      };

    case "EMPTY_BASKET":
      return {
        ...state,
        cart: [],
      };

    //   case "SET_USER":
    //     return {
    //       ...state,
    //       user: action.user,
    //     };
    case "UPDATE_CART":
      return {
        ...state,
        cart: action.cart,
      };

    //   case "ADD_SIZE_TO_CART":
    //     return {
    //       ...state,
    //       cart: action.cart,
    //     };
    default:
      return state;
  }
};

export default reducer;
