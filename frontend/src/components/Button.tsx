type ButtonProps = {
    btnText: string
}

const Button = ({ btnText }: ButtonProps) => {
    return (
        <button className="group relative w-full overflow-hidden border border-gray-900 p-3">
            <p className="text-sm font-medium capitalize text-gray-900 transition-all duration-300 ease-linear group-hover:text-white">
                {btnText}
            </p>
            <div className="absolute left-0 right-0 top-0 -z-[999] h-24 w-full -translate-x-[110%] bg-gray-900 transition-all duration-300 ease-linear group-hover:translate-x-0 group-hover:scale-150"></div>
        </button>
    )
}

export default Button
