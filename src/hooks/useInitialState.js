import { useState } from 'react';

const initialState = {
    cart: [],
}

const useInitialState = () => {
    const [state, setState] = useState(initialState);

    const addToCart = (payload) => {
        payload.index = state.cart.length;  // test

        setState({
            ...state,
            cart: [ ...state.cart, payload],
            //cart: [ {id:1}, {id:1}]
        });
    };

    const removeFromCart = (payload) => {
        setState({
            ...state,
            cart: state.cart.filter(items => items.id !== payload.id)
        });
    }

    return { state, addToCart, removeFromCart };
}

export default useInitialState;