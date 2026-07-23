import { createContext, useEffect, useState } from "react";

export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    const savedAdmin = localStorage.getItem("admin");

    if (savedToken) {
      setToken(savedToken);
    }

    if (savedAdmin === "true") {
      setAdmin(true);
    }
  }, []);

  return (
    <StoreContext.Provider
      value={{
        token,
        setToken,
        admin,
        setAdmin,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
