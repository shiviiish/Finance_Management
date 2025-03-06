import React from "react";

interface AuthButtonProps {
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

const AuthButton: React.FC<AuthButtonProps> = ({ setIsAuthenticated }) => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  };

  return (
    <button onClick={handleLogout} className="btn btn-danger">
      Logout
    </button>
  );
};

export default AuthButton;
