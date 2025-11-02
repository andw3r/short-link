interface AuthButtonProps {
  children: React.ReactNode;
}

const DashboardTitle: React.FC<AuthButtonProps> = ({ children }) => {
  return (
    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium mt-3 md:mt-4 lg:mt-5 mb-5 md:mb-7 lg:mb-9">{children}</h2>
  );
};

export default DashboardTitle;
