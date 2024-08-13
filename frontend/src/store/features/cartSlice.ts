import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

type Product = {
    id: number
    name: string
    category: string
    price: number
    description: string
    image: string
}

type CartItem = Product & {
    cartQuantity: number
}

type CartState = {
    cartItems: CartItem[]
    cartTotalQuantity: number
    cartTotalAmount: number
}

// check cart items already exist on local storage if there are cart items set it as initial state ... if not set [] as initial state
const getCartItemsFromLocalStorage = (): CartItem[] => {
    const savedCartItems = localStorage.getItem('cartItems')
    return savedCartItems ? JSON.parse(savedCartItems) : []
}

const initialState: CartState = {
    cartItems: getCartItemsFromLocalStorage(),
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const itemIndex = state.cartItems.findIndex(
                (item) => item.id === action.payload.id,
            )
            if (itemIndex >= 0) {
                state.cartItems[itemIndex].cartQuantity += 1
                toast.info(`increased ${action.payload.name} quantity`, {
                    position: 'bottom-right',
                })
            } else {
                const tempProduct = { ...action.payload, cartQuantity: 1 }
                state.cartItems.push(tempProduct)
                toast.success(`${action.payload.name} added to cart`, {
                    position: 'bottom-right',
                })
            }

            // store cart item in local storage
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
        },
        removeFromCart: (state, action) => {
            const updatedCartItems = state.cartItems.filter(
                (cartItem) => cartItem.id !== action.payload.id,
            )
            state.cartItems = updatedCartItems
            // store cart item in local storage
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems))

            toast.error(`${action.payload.name} removed from the cart`, {
                position: 'bottom-right',
            })

            if (updatedCartItems.length === 0) {
                toast.info('cart is empty!', {
                    position: 'bottom-right',
                })
            }
        },
    },
})

export const { addToCart, removeFromCart } = cartSlice.actions
export default cartSlice.reducer
