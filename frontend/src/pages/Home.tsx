import { useDispatch } from 'react-redux'
import { useGetAllProductsQuery } from '../store/features/productsApi'
import { addToCart } from '../store/features/cartSlice'

type Product = {
    id: number
    name: string
    category: string
    price: number
    description: string
    image: string
}

const Home = () => {
    const { data: products, error, isLoading } = useGetAllProductsQuery()
    const dispatch = useDispatch()

    const handleAddToCart = (product: Product) => {
        dispatch(addToCart(product))
    }

    return (
        <div className="container">
            {isLoading ? (
                <div>Loading ...</div>
            ) : error ? (
                <div>Error occured</div>
            ) : (
                <>
                    <h2>Our Products</h2>

                    <div className="mt-6 grid grid-cols-3 gap-6">
                        {products?.map((product) => (
                            <div
                                key={product.id}
                                className="flex flex-col items-center bg-gray-100 p-3"
                            >
                                <h3 className="text-lg capitalize">
                                    {product.name}
                                </h3>
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="h-[240px] w-full max-w-[240px] object-cover object-center"
                                />
                                <p>LKR {product.price.toLocaleString()}</p>
                                <button
                                    onClick={() => handleAddToCart(product)}
                                    className="btn-outline"
                                >
                                    add to cart
                                </button>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    )
}

export default Home
