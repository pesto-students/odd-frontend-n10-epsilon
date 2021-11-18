import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthProvide";
import { Button, Input } from "@odd/components";

import "./style.css";

export function LoginPage() {
  let navigate = useNavigate();
  let location = useLocation();
  let auth = useAuth();

  let from = location.state?.from?.pathname || "/";

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    let formData = new FormData(event.currentTarget);
    let username = formData.get("username") as string;

    auth.signin(username, () => {
      navigate("/dashboard", { replace: true });
    });
  }

  return (
    <div>
      <img
        src={require("../../assets/background.svg").default}
        alt="img"
        className="absolute h-screen right-0 z-0"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-16">
        <div className="flex flex-1">          <div className="m-auto  flex-1 items-center  bg-white	 mt-25vh shadow-2xl max-w-md p-10 rounded-lg">
            <h2 className="text-center text-2xl font-semibold mb-10">
              Admin as Login
            </h2>
            <Input label="Email" />
            <Input label="Password" className="mt-6" />
            <Button primary block className="rounded-xl" onClick={() => {}}>
              Login
            </Button>
          </div>
        </div>
      </div>
      <div className="col-span-1 "></div>
    </div>
  );
}
