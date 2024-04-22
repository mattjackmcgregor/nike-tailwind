const Button = ({
  label,
  iconURL,
  borderColor,
  backgroundColor,
  textColor,
  fullWidth,
}) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-1 rounded-full ${
        fullWidth && "w-full"
      }
      ${
        backgroundColor
          ? `${backgroundColor} ${borderColor} ${textColor}`
          : "text-white  bg-coral-red border-coral-red"
      }
      `}
    >
      {label}
      {iconURL && (
        <img
          src={iconURL}
          alt="arrow right icon"
          className="ml-2 rounded-full w-5 h-5 "
        />
      )}
    </button>
  );
};

export default Button;
