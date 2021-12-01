import React, { useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";

interface AuthContextType {
  user: any;
  signin: (user: string, callback: VoidFunction) => void;
  signout: (callback: VoidFunction) => void;
}

let AuthContext = React.createContext<AuthContextType>(null!);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  let [user, setUser] = React.useState<any>(null);

  useEffect(() => {
    const data = localStorage.getItem("user");
    console.log(data);

    if (!data) return;
    setUser("usbcheb");
  }, []);

  let signin = (newUser: string, callback: VoidFunction) => {
    setUser(newUser);
    localStorage.setItem("user", JSON.stringify(newUser));
    callback();
  };

  let signout = (callback: VoidFunction) => {
    setUser(null);
    localStorage.removeItem("user");
    callback();
  };
  let value = { user, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return React.useContext(AuthContext);
}

export function RequireAuth({ children }: { children: JSX.Element }) {
  let auth = useAuth();
  let location = useLocation();

  if (!auth.user) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
}
