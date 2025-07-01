import { createContext, useState } from "react";
import { assets, food_list } from "../assets/assets";

export const StoreContext = createContext()

const StoreContextProvider = (props) => {

    const [cartItems,setCartItems] = useState({});

    const addToCart = (itemId) => {
        if(!cartItems[itemId]){
            setCartItems((prev) => ({...prev,[itemId]:1}));
        }else{
            setCartItems((prev) => ({...prev,[itemId]:prev[itemId]+1}));
        }
    }
console.log(assets._id);
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev,[itemId]:prev[itemId] - 1}));
    }

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
    }
    console.log(cartItems)
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;