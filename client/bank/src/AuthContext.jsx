import { createContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  const getLogin = () => {
    fetch("http://localhost:5174/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "Authorized") {
          setIsLogin(true);
        } else {
          setIsLogin(false);
          
        }
      });
  };

  return (
    <AuthContext.Provider value={{ isLogin, getLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
