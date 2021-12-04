import { CookieHelper } from "@odd/base";
import React, { useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";

interface AuthContextType {
  user: any;
  signin: (user: string, callback: VoidFunction) => void;
  signout: (callback: VoidFunction) => void;
}

let AuthContext = React.createContext<AuthContextType>(null!);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  let [user, setUser] = React.useState<any>(CookieHelper.GetCookie("user"));

  useEffect(() => {
    const data = CookieHelper.GetCookie("user");
    console.log(data);
    if (!data) return;
    setUser(data);
  }, []);

  let signin = (newUser: string, callback: VoidFunction) => {
    setUser(newUser);
    CookieHelper.SetCookie("user", newUser);
    callback();
  };

  let signout = (callback: VoidFunction) => {
    setUser(null);
    CookieHelper.DeleteCookie("user");
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

export function OnAuth({ children }: { children: JSX.Element }) {
  let auth = useAuth();
  let location = useLocation();

  if (auth.user) {
    return <Navigate to="/dashboard" state={{ from: location }} />;
  }

  return children;
}
