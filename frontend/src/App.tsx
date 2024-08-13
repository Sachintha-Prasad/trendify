import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Cart from './pages/Cart'

const App = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/">
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path="/cart" element={<Cart />} />
                </Route>
            </Route>,
        ),
    )

    return <RouterProvider router={router} />
}

export default App
