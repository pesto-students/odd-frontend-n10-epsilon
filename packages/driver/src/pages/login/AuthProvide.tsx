import { CookieHelper } from "@odd/base";
import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getApi } from "../../api-call";
import { API } from "../../constant/Endpoints";
import { addInfo, clear, Driver } from "../../redux/slices/driver";

interface AuthContextType {
  user: any;
  signin: (user: string, callback: VoidFunction) => void;
  signout: (callback: VoidFunction) => void;
}

let AuthContext = React.createContext<AuthContextType>(null!);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  let [user, setUser] = React.useState<any>(CookieHelper.GetCookie("user"));
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const getMyDetails = useCallback(async () => {
    const id = toast.loading("Please wait...");
    try {
      const api = API.DRIVER_ENDPOINTS.MY_DETAILS;
      const result = await getApi(api);
      const resultData = result.data;
      if (resultData && resultData.success) {
        dispatch(addInfo(resultData.data));
      }
      if (!resultData.data.profile_completed) {
        navigate("/dashboard/completeProfile");
      }
      if (
        resultData.data.profile_completed &&
        !resultData.data.document_submitted
      ) {
        navigate("/dashboard/completeProfile/doc");
      }
    } catch (error: any) {
      toast.dismiss(id);
      handleAuthorization(error?.status as number);
    } finally {
      toast.dismiss(id);
    }
  }, [dispatch, navigate]);

  const handleAuthorization = (status: number) => {
    if (status !== 401) return;
    CookieHelper.DeleteCookie("token");
    CookieHelper.DeleteCookie("user");
    setUser(null);
    toast.error("Your session is expired. Please login again...");
  };

  useOnceCall(() => {
    const data = CookieHelper.GetCookie("user");
    console.log(data);
    if (!data) return;
    setUser(data);
    getMyDetails();
  });

  let signin = (newUser: string, callback: VoidFunction) => {
    setUser(newUser);

    CookieHelper.SetCookie("user", newUser);
    callback();
  };

  let signout = (callback: VoidFunction) => {
    const api = API.DRIVER_ENDPOINTS.LOGOUT;
    getApi(api);
    CookieHelper.DeleteCookie("token");
    CookieHelper.DeleteCookie("user");
    setUser(null);
    dispatch(clear(null));
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
  const state = useSelector((state: any) => state.driver.state) as Driver;

  if (auth.user && state.mobile_number && !state.document_submitted) {
    return (
      <Navigate
        to={"/dashboard/completeProfile"}
        state={{ from: location.state?.from?.pathname }}
      />
    );
  }
  if (auth.user && state.profile_completed && !state.document_submitted) {
    return (
      <Navigate
        to={"/dashboard/completeProfile/doc"}
        state={{ from: location.state?.from?.pathname }}
      />
    );
  }
  if (auth.user && state.profile_completed && state.document_submitted) {
    return (
      <Navigate
        to={"/dashboard/home"}
        state={{ from: location.state?.from?.pathname }}
      />
    );
  }

  return children;
}

function useOnceCall(cb: () => void, condition = true) {
  const isCalledRef = React.useRef(false);

  useEffect(() => {
    if (condition && !isCalledRef.current) {
      isCalledRef.current = true;
      cb();
    }
  }, [cb, condition]);
}
