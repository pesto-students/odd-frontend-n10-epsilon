import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthProvide";
import { Button, Input } from "@odd/components";

import "./style.css";

export function LoginPage() {
  let navigate = useNavigate();
  let location = useLocation();
  let auth = useAuth();

  let from = location.state?.from?.pathname || "/dashboard";

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    let formData = new FormData(event.currentTarget);
    let username = formData.get("username") as string;

    console.log(username);

    auth.signin(username, () => {
      navigate(from, { replace: true });
    });
  }

  return (
    <div className="w-screen h-screen">
      <div className="relative flex h-full">
        <img
          src={require("../../assets/background.svg").default}
          alt="img"
          className="absolute top-0 left-0 h-full w-full object-cover"
        />
        <div className="flex h-full w-full min-w-sm z-0">
          <div className="flex-1 my-auto p-3">
            <div className=" m-auto flex-1 items-center bg-white	 mt-25vh shadow-2xl max-w-md p-10 rounded-lg">
              <h2 className="text-center text-2xl font-semibold mb-10">
                Login as Admin
              </h2>
              <form onSubmit={handleSubmit}>
                <Input fieldStyle="legacy" label="Email" name="username" />
                <Input fieldStyle="legacy" label="Password" className="mt-6" />
                <Button primary block className="rounded-xl" onClick={() => {}}>
                  Login
                </Button>
              </form>
            </div>
          </div>
          <div className="flex-none sm:flex-1 justify-items-center" />
        </div>
      </div>
    </div>
  );
}
