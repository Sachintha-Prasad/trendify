import { useGetAllProductsQuery } from '../store/features/productsApi'

const Home = () => {
    const { data: products, error, isLoading } = useGetAllProductsQuery()

    return (
        <div className="container">
            {isLoading ? (
                <div>Loading ...</div>
            ) : error ? (
                <div>Error occured</div>
            ) : (
                <>
                    <h2>New Arrivals</h2>
                    <div className="grid grid-cols-3 gap-6">
                        {products?.map((product) => (
                            <div key={product.id}>
                                <h3 className="text-lg font-semibold capitalize">
                                    {product.name}
                                </h3>
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="h-[240px] w-full max-w-[240px] object-cover object-center"
                                />
                                <p>{product.description}</p>
                                <p>{product.category}</p>
                                <p>{product.price}</p>
                                <button>add to cart</button>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    )
}

export default Home
