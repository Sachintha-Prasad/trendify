import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

type Product = {
    id: number
    name: string
    category: string
    price: number
    description: string
    image: string
}

export const productsApi = createApi({
    reducerPath: "productsApi",
    // base url
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/" }),
    endpoints: (builder) => ({
        getAllProducts: builder.query<Product[], void>({
            // endpoint
            query: () => "products"
        })
    })
})

// export the getAllProducts endpoint as a hook
export const { useGetAllProductsQuery } = productsApi
