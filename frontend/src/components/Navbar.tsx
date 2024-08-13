import { MdOutlineShoppingBag } from 'react-icons/md'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="mb-6 flex h-[75px] w-full">
            <div className="fixed flex h-[75px] w-full items-center justify-center bg-gray-900">
                <div className="container flex items-center justify-between">
                    <Link to="/">
                        <p className="text-xl font-medium text-white">
                            Trendify
                        </p>
                    </Link>
                    <Link to="/cart" className="relative">
                        <MdOutlineShoppingBag className="text-2xl text-white" />
                        <div className="absolute top-full flex h-3 w-3 -translate-y-[8px] translate-x-[12px] items-center justify-center rounded-full bg-yellow-400 p-2 text-[12px] text-black ring-2 ring-gray-900">
                            <p>3</p>
                        </div>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
