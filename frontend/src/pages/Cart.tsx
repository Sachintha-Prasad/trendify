import { GrTrash } from 'react-icons/gr'
import { HiOutlineArrowSmallLeft } from 'react-icons/hi2'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { RootState } from '../store/store'
import { useDispatch } from 'react-redux'
import { removeFromCart } from '../store/features/cartSlice'

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

const Cart = () => {
    const cart = useSelector((store: RootState) => store.cart)
    const dispatch = useDispatch()

    const handleRemoveFromCart = (cartItem: CartItem) => {
        dispatch(removeFromCart(cartItem))
    }

    return (
        <div className="container">
            <h2 className="capitalize">shopping cart</h2>

            {cart.cartItems.length === 0 ? (
                <div className="flex min-h-[400px] flex-col items-center justify-center gap-3">
                    <h3 className="text-center text-xl capitalize">
                        currently your cart is empty!😑
                    </h3>

                    <Link
                        to="/"
                        className="group flex items-center gap-2 text-lg capitalize"
                    >
                        <HiOutlineArrowSmallLeft className="group-hover:-translate-x-1" />
                        start shopping
                    </Link>
                </div>
            ) : (
                <div className="mt-6">
                    <div className="relative">
                        <table className="w-full table-auto text-left">
                            <thead className="border-b uppercase text-gray-900">
                                <tr>
                                    <th scope="col" className="py-3">
                                        product
                                    </th>
                                    <th scope="col" className="py-3">
                                        category
                                    </th>
                                    <th scope="col" className="py-3">
                                        price
                                    </th>
                                    <th scope="col" className="py-3">
                                        quantity
                                    </th>
                                    <th scope="col" className="py-3">
                                        total
                                    </th>
                                    <th scope="col" className="py-3"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.cartItems.map((cartItem) => (
                                    <tr className="border-b" key={cartItem.id}>
                                        <td
                                            scope="row"
                                            className="ju flex items-center gap-3 whitespace-nowrap py-3 font-medium"
                                        >
                                            <img
                                                src={cartItem.image}
                                                alt={cartItem.name}
                                                className="h-24 w-24 object-cover object-center"
                                            />
                                            {cartItem.name}
                                        </td>
                                        <td className="py-3">
                                            {cartItem.category}
                                        </td>
                                        <td className="py-3">
                                            LKR{' '}
                                            {cartItem.price.toLocaleString()}
                                        </td>
                                        <td className="py-3">
                                            <div>
                                                <button>+</button>
                                                <p>{cartItem.cartQuantity}</p>
                                                <button>-</button>
                                            </div>
                                        </td>
                                        <td className="py-3">
                                            LKR{' '}
                                            {(
                                                cartItem.price *
                                                cartItem.cartQuantity
                                            ).toLocaleString()}
                                        </td>
                                        <td className="py-3">
                                            <GrTrash
                                                onClick={() =>
                                                    handleRemoveFromCart(
                                                        cartItem,
                                                    )
                                                }
                                                className="cursor-pointer text-lg hover:text-red-600"
                                            />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <div className="flex w-full justify-between">
                            <div>
                                <button>clear cart</button>
                            </div>
                            <div>
                                <div>sub total</div>
                                <div>
                                    LKR {cart.cartTotalAmount.toLocaleString()}
                                </div>
                                <p>
                                    * taxes and shipping calculated at checkout
                                </p>
                                <button className="btn-filled">
                                    check out
                                </button>

                                <Link
                                    to="/"
                                    className="group flex items-center gap-2 capitalize"
                                >
                                    <HiOutlineArrowSmallLeft className="group-hover:-translate-x-1" />
                                    continue shopping
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Cart
