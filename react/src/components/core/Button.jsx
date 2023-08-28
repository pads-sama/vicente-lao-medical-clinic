const Button = ({ children, onClick, color, size }) => {
  // Define color classes based on the 'color' prop
  const colorClasses = color === 'primary' ? 'hover:bg-blue-700 text-white bg-blue-500 | md:bg-blue-700 md:hover:bg-blue-500 z-10' : 'bg-gray-300 text-gray-800';

  // Define size classes based on the 'size' prop
  const sizeClasses = size === 'small' ? 'py-3 px-5 text-base uppercase drop-shadow-lg | md:py-4 md:px-8' : 'py-2 px-4 text-base';

  return (
    <button
      onClick={onClick}
      className={`rounded-full ${colorClasses} ${sizeClasses} hover:bg-opacity-80 transition mt-5 slide-up`}
    >
      {children}
    </button>
  );
};

export default Button;
