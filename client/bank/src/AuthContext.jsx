import { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    // Vérifie si l'utilisateur est loggé au montage initial de l'application
    checkIsLogin()
  }, [])


  /**
   * fonction pour vérifier l'authentification de l'utilisateur côté client
   */
  const checkIsLogin = async () => {
    try {
      const response = await fetch("http://localhost:5174/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      })

      const data = await response.json();

      if (data.userId) {
        setIsLogin(true);
      } else {
        setIsLogin(false);
      }
    } catch (error) {
      console.log("Erreur lors de la vérification de l'authentification: ", error );
    }
  };

  return (
    <AuthContext.Provider value={{ isLogin, checkIsLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
