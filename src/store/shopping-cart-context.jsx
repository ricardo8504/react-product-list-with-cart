import { createContext, useState } from "react";

export const ShoppingCartContext = createContext({
    items: {},
    addToCart: () =>{},
    getProductFromCart:  () =>{},
    updateProductQuantity:  () =>{},
    removeProductFromCart:  () =>{}
});


export default function ShoppingCartProvider({children}) {

    const [shoppingCart, setShoppingCart] = useState({items: [], description: ""});

    function handleAddToCart(product) {
        setShoppingCart((prevState) => {
        return {
            ...prevState,
            items: [...prevState.items, product]
        }
        });
    }

    function getProductFromCart(product) {
        return shoppingCart.items.find(item => item.name === product.name);
    }

    //update product quantity in the cart and remove it if its quantity is 0
    function updateProductQuantity(product, quantity) {
        setShoppingCart((prevState) => {
        const updatedItems = prevState.items.map(item => {
            if (item.name === product.name) {
            item.quantity = quantity;
            }
            return item;
        });
        return {
            ...prevState,
            items: updatedItems.filter(item => item.quantity > 0)
        }
        });
    } 

    //remove product from the cart
    function removeProductFromCart(product) {
        setShoppingCart((prevState) => {
        return {
            ...prevState,
            items: prevState.items.filter(item => item.name !== product.name)
        }
        });
    }

    const cart = {
        items: shoppingCart.items,
        addToCart: handleAddToCart,
        getProductFromCart: getProductFromCart,
        updateProductQuantity: updateProductQuantity,
        removeProductFromCart: removeProductFromCart
    };

    return (
        <ShoppingCartContext.Provider value={cart}>
            {children}
        </ShoppingCartContext.Provider>
    );

}
