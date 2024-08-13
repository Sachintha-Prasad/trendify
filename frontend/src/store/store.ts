import { configureStore } from '@reduxjs/toolkit'
import productsReducer, { productsFetch } from './features/productsSlice'
import { productsApi } from './features/productsApi'
import cartReducer from './features/cartSlice'
import { combineReducers } from '@reduxjs/toolkit'

const store = configureStore({
    reducer: {
        products: productsReducer,
        cart: cartReducer,
        [productsApi.reducerPath]: productsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productsApi.middleware),
})

const rootReducer = combineReducers({
    cart: cartReducer,
})

store.dispatch(productsFetch())

export type RootState = ReturnType<typeof rootReducer>
export default store
