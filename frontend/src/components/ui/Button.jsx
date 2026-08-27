function Button({
  children,
  onClick,
  type = "button",
  className = "",
  disabled = false,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        bg-blue-600
        hover:bg-blue-700
        disabled:bg-gray-400
        text-white
        font-semibold
        px-6
        py-3
        rounded-xl
        transition
        duration-300
        ${className}
      `}
    >
      {children}
    </button>
  );
}

export default Button;