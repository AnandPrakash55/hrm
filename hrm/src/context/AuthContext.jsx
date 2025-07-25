import React, { createContext, useContext, useState, useEffect } from "react";

// Create AuthContext
const AuthContext = createContext();

// Custom hook to use the context
export const useAuth = () => useContext(AuthContext);

// AuthProvider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Load user from localStorage on app load
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) setUser(storedUser);
  }, []);

  const login = async (email, password) => {
    // Dummy auth logic
    if (email === "admin@example.com" && password === "admin123") {
      const user = { name: "Admin", email, role: "Admin" };
      setUser(user);
      localStorage.setItem("user", JSON.stringify(user));
      return true;
    }
    if (email === "employee@example.com" && password === "emp123") {
      const user = { name: "Employee", email, role: "Employee" };
      setUser(user);
      localStorage.setItem("user", JSON.stringify(user));
      return true;
    }
    return false;
  };

  const register = async ({ name, email, password, role }) => {
    const newUser = { name, email, role };
    setUser(newUser);
    localStorage.setItem("user", JSON.stringify(newUser));
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
