import { useState } from 'react';

const initialState = {
  cart: [],
  orderIsOpen: false,
  menuIsOpen: false,
  menumobileIsOpen: false,
  detailIsOpen: false,
  product: {},
};

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const addToCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.includes(payload) ? state.cart : [...state.cart, payload],
    });
  };

  const removeFromCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.filter((items) => items.id !== payload.id),
    });
  };
  const toggleOrder = () => {
    setState({
      ...state,
      orderIsOpen: !state.orderIsOpen,
    });
  };

  const toggleMenu = () => {
    setState({
      ...state,
      menuIsOpen: !state.menuIsOpen,
    });
  };
  const toggleMenuMobile = () => {
    setState({
      ...state,
      menumobileIsOpen: !state.menumobileIsOpen,
    });
  };
  const toggleDetailOpen = (payload) => {
    setState({
      ...state,
      product: payload,
      detailIsOpen: true,
    });
  };
  const toggleDetailClose = () => {
    setState({
      ...state,
      product: {},
      detailIsOpen: false,
    });
  };

  return {
    state,
    addToCart,
    removeFromCart,
    toggleOrder,
    toggleMenu,
    toggleMenuMobile,
    toggleDetailOpen,
    toggleDetailClose,
  };
};

export default useInitialState;
