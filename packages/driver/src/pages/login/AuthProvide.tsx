import { CookieHelper } from "@odd/base";
import React, { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { getApi } from "../../api-call";
import { API } from "../../constant/Endpoints";
import { addInfo } from "../../redux/slices/driver";

interface AuthContextType {
  user: any;
  signin: (user: string, callback: VoidFunction) => void;
  signout: (callback: VoidFunction) => void;
}

let AuthContext = React.createContext<AuthContextType>(null!);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  let [user, setUser] = React.useState<any>(CookieHelper.GetCookie("user"));
  const dispatch = useDispatch();
  const getMyDetails = useCallback(async () => {
    const id = toast.loading("Please wait...");
    try {
      const api = API.DRIVER_ENDPOINTS.MY_DETAILS;
      const result = await getApi(api);
      const resultData = result.data;
      if (resultData && resultData.success) {
        dispatch(addInfo(resultData.data));
      } else {
        console.log(resultData.error);
      }
    } catch (error) {
      console.log(error);
    } finally {
      toast.dismiss(id);
    }
  }, [dispatch]);

  useEffect(() => {
    const data = CookieHelper.GetCookie("user");
    console.log(data);
    if (!data) return;
    setUser(data);
    getMyDetails();
  }, [getMyDetails]);

  let signin = (newUser: string, callback: VoidFunction) => {
    setUser(newUser);

    CookieHelper.SetCookie("user", newUser);
    callback();
  };

  let signout = (callback: VoidFunction) => {
    setUser(null);
    const api = API.DRIVER_ENDPOINTS.LOGOUT;
    getApi(api);
    CookieHelper.DeleteCookie("user");
    CookieHelper.DeleteCookie("token");
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
  console.log(location.state?.from?.pathname);

  if (auth.user) {
    return (
      <Navigate
        to={location.state?.from?.pathname ?? "/dashboard/home"}
        state={{ from: location.state?.from?.pathname }}
      />
    );
  }

  return children;
}
