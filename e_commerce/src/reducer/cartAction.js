import axios from 'axios'
const {CART_ADD_ITEM, CART_REMOVE_ITEM} = require("./cartConstant")

const addToCart = (productId, qty) => async (dispatch, getState) => {

   
        const {data} = await axios.get("/api/products/" + productId)
        dispatch({ type:CART_ADD_ITEM, payload:{
            product: data._id,
            name: data.name,
            image: data.image,
            price: data.price,
            countInStock: data.countInStock,
            qty: qty
        }}) 

        localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
    

}

const removeFromCart = (productId) => (dispatch, getState) => {
    dispatch({type: CART_REMOVE_ITEM, payload: productId})

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export {addToCart, removeFromCart}
