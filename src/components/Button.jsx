const Button = ({children,className,type,disabled}) => {
  return (
    <button type={type || "button"} disabled={disabled || false} className={`text-nowrap hover:bg-secondary duration-300 mx-auto lg:mx-0 disabled:bg-gray-800 font-extrabold   text-white outline-none rounded-md p-1 md:p-2  bg-primary ${className}`}>{children}</button>
  )
}

export default Button
