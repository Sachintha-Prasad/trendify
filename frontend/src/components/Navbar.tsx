import { MdOutlineShoppingBag } from "react-icons/md"
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="bg-gray-900 h-[75px] py-4 relative">
            <div className="container top-[24px] left-1/2 -translate-x-1/2 flex items-center justify-between fixed">
                <Link to="/">
                    <p className="text-xl font-medium text-white">Trendify</p>
                </Link>
                <Link to="/cart" className="relative">
                    <MdOutlineShoppingBag className="text-2xl text-white" />
                    <div className="absolute top-full translate-x-[12px] ring-2 ring-gray-900 -translate-y-[8px] rounded-full p-2 bg-yellow-400 text-black h-3 w-3 flex items-center justify-center text-[12px]">
                        <p>3</p>
                    </div>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar
