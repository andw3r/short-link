interface ActionButtonProps {
  children: React.ReactNode;
  variant?: "default" | "delete";
  onClick?: () => void;
  className?: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({
  children,
  variant = "default",
  onClick,
  className = "",
}) => {
  const baseStyles = "bg-action-button flex justify-center items-center w-10 h-10 rounded-md transition-colors duration-200 cursor-pointer";

  const variantStyles = {
    default: "text-secondary",
    delete: "text-red-500",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default ActionButton;
