import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

type Product = {
    id: number
    name: string
    category: string
    price: number
    description: string
    image: string
}

type ProductsState = {
    items: Product[]
    status: "idle" | "pending" | "success" | "rejected"
    error: string | null
}

const initialState: ProductsState = {
    items: [],
    status: "idle",
    error: null
}

export const productsFetch = createAsyncThunk<
    Product[],
    number | undefined,
    { rejectValue: string }
>("products/productsFetch", async (id, { rejectWithValue }) => {
    try {
        const response = await axios.get("http://localhost:5000/products", {
            params: { id }
        })
        return response.data
    } catch (error) {
        return rejectWithValue("An error occurred")
    }
})

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(productsFetch.pending, (state) => {
                state.status = "pending"
                state.error = null
            })
            .addCase(productsFetch.fulfilled, (state, action) => {
                state.status = "success"
                state.items = action.payload
            })
            .addCase(productsFetch.rejected, (state, action) => {
                state.status = "rejected"
                state.error = action.payload || "Unknown error occurred"
            })
    }
})

export default productsSlice.reducer
