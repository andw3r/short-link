interface AuthButtonProps {
  children: React.ReactNode;
}

const AuthButton: React.FC<AuthButtonProps> = ({ children }) => {
  return (
    <button className="cursor-pointer bg-button-primary text-white md:text-[18px] py-2 md:py-3 w-full rounded-xl hover:bg-primary-hover transition">
      {children}
    </button>
  );
};

export default AuthButton;
