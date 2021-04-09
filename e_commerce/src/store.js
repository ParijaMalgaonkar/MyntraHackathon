import {createStore, combineReducers,  compose, applyMiddleware} from 'redux'
import {productListReducer,
        productDetailReducer} from './reducer/productReducer'
import {cartReducer} from './reducer/cartReducer'
import thunk from 'redux-thunk'
import Cookie from 'js-cookie'
import {
    userSigninReducer,
    userRegisterReducer,
  } from './reducer/userReducer'
   
const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem("cartItems")) : []
const userInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem("userInfo")) : null

const intialState = {cart: {cartItems}, userSignin: { userInfo }}
const reducer = combineReducers({
    productList: productListReducer,
    productDetail: productDetailReducer,
    cart: cartReducer,
    userSignin: userSigninReducer,
    userRegister: userRegisterReducer,
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer, intialState, composeEnhancer(applyMiddleware(thunk))) //async action - thunk

export default store