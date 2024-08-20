import { useDispatch } from 'react-redux'
import { useGetAllProductsQuery } from '../store/features/productsApi'
import { addToCart } from '../store/features/cartSlice'
import Button from '../components/Button'
import { SlHeart } from 'react-icons/sl'
import { PiEye } from 'react-icons/pi'

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

                    <div className="mt-6 grid gap-x-6 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                        {products?.map((product) => (
                            <div
                                key={product.id}
                                className="flex flex-col items-center gap-4"
                            >
                                <div className="group flex w-full flex-col items-center gap-3">
                                    <div className="relative w-full overflow-hidden">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="h-[300px] w-full object-cover object-center transition-all duration-300 ease-in-out group-hover:scale-105"
                                        />
                                        <button
                                            title="add to favourites"
                                            className="absolute right-2 top-2 -translate-y-[200px] rounded-full bg-white p-3 text-lg transition-all duration-300 ease-in-out hover:bg-gray-900 hover:text-white group-hover:translate-y-0"
                                        >
                                            <SlHeart />
                                        </button>
                                        <button className="absolute bottom-0 left-0 right-0 flex w-full translate-y-full items-center justify-center gap-2 bg-gray-900 p-3 text-white transition-all duration-300 ease-in-out group-hover:translate-y-0">
                                            <PiEye className="text-lg" />
                                        </button>
                                    </div>
                                    <div className="flex w-full items-center justify-between gap-3">
                                        <h3 className="text-sm capitalize">
                                            {product.name}
                                        </h3>
                                        <p className="text-sm font-medium">
                                            LKR {product.price.toLocaleString()}
                                        </p>
                                    </div>
                                </div>
                                <div
                                    className="w-full"
                                    onClick={() => handleAddToCart(product)}
                                >
                                    <Button btnText="add to cart" />
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    )
}

export default Home
