import { createContext, useReducer } from "react";

export const ShoppingCartContext = createContext({
    items: {},
    isShowConfirmOrder: false,
    addToCart: () =>{},
    getProductFromCart:  () =>{},
    updateProductQuantity:  () =>{},
    removeProductFromCart:  () =>{},
    showConfirmOrder:  () =>{},
    startNewOrder:  () =>{}

});


export function ShoppingCartReducer(state, action) {
    if (action.type === 'ADD_TO_CART') {
        return {
            ...state,
            items: [...state.items, action.payload.product]
        }
    } else if (action.type === 'UPDATE_PRODUCT_QUANTITY') {
        const updatedItems = state.items.map(item => {
            if (item.name === action.payload.product.name) {
                item.quantity = action.payload.quantity;
            }
            return item;
        });
        return {
            ...state,
            items: updatedItems.filter(item => item.quantity > 0)
        }
    } else if (action.type === 'REMOVE_PRODUCT_FROM_CART') {
        return {
            ...state,
            items: state.items.filter(item => item.name !== action.payload.product.name)
        }
    } else if (action.type === 'SHOW_CONFIRM_ORDER') {
        return {
            ...state,
            isShowConfirmOrder: true
        }
    } else if (action.type === 'START_NEW_ORDER') {
        return {
            ...state,
            items: [],
            isShowConfirmOrder: false
        }
    }          
    return state;
}

export default function ShoppingCartProvider({children}) {
    const [shoppingCartState, shoppingCartDispatch] = useReducer(ShoppingCartReducer, 
        {
            items: [], 
            description: "", 
            isShowConfirmOrder: false
        });

    function handleAddToCart(product) {
        shoppingCartDispatch({type: 'ADD_TO_CART', 
            payload: {
                product: product
            }
        });
    }

    function getProductFromCart(product) {
        return shoppingCartState.items.find(item => item.name === product.name);
    }

    //update product quantity in the cart and remove it if its quantity is 0
    function updateProductQuantity(product, quantity) {
        shoppingCartDispatch({type: 'UPDATE_PRODUCT_QUANTITY', 
            payload: {
                product: product, 
                quantity: quantity
            }
        });
    } 

    //remove product from the cart
    function removeProductFromCart(product) {
        shoppingCartDispatch({type: "REMOVE_PRODUCT_FROM_CART", 
            payload: {
                product: product
            }
        })
    }

    //show confirm order page
    function showConfirmOrder() {
        shoppingCartDispatch({type: "SHOW_CONFIRM_ORDER"});
    }

    //start new order
    function startNewOrder() {
        shoppingCartDispatch({type: "START_NEW_ORDER"});
    }

    const cart = {
        items: shoppingCartState.items,
        isShowConfirmOrder: shoppingCartState.isShowConfirmOrder,
        addToCart: handleAddToCart,
        getProductFromCart: getProductFromCart,
        updateProductQuantity: updateProductQuantity,
        removeProductFromCart: removeProductFromCart,
        showConfirmOrder: showConfirmOrder,
        startNewOrder: startNewOrder
    };

    return (
        <ShoppingCartContext.Provider value={cart}>
            {children}
        </ShoppingCartContext.Provider>
    );

}
