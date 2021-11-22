import { useLocation, useNavigate } from "react-router-dom";
import { Button, Input ,Icon} from "@odd/components";

import { useAuth } from "./AuthProvide";


export function LoginPage() {
  let navigate = useNavigate();
  let location = useLocation();
  let auth = useAuth();

  let from = location.state?.from?.pathname || "/dashboard";

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    let formData = new FormData(event.currentTarget);
    let username = formData.get("username") as string;

    auth.signin(username, () => {
      navigate(from, { replace: true });
    });
  }
  const login = (
    <p className="mt-8">
      By signing up, you accept our{" "}
      <a href="#policy"  className="text-primary">
        Terms of use
      </a>
      and
      <a href="#policy" className="text-primary">
        Privacy Policy
      </a>
    </p>
  );

  return (
    <div className="w-1/2 shadow-xl">
      <button onClick={() => {}} className="float-right mb-3">
        <Icon iconName="close" className="text-midGray" size="24" />
      </button>
      <div className="p-3">
        <h2 className="text-center text-2xl p-3 ">Login / Signup</h2>
        <form onSubmit={handleSubmit}>
          <Input
            labelClassName="mb-1 text-midGray"
            label="Enter your phone number"
            className="mt-3"
            name="username"
            placeholder="Enter your mobile number"
            leading={<label className="whitespace-nowrap"> +91 |</label>}
          />

          {/* <p className="mt-6 mb-3 text-midGray">
            Enter the OTP sent to your Number
          </p>
          <Otp />
          <p className="text-primary mt-2 ">
            {" "}
            <a>Resend Otp</a>
          </p> */}
          {login}

          <Button
            primary
            className="block w-full py-2 mt-8 text-2xl"
            onClick={() => {}}
          >
            Send OTP
          </Button>
        </form>
      </div>
    </div>
  );
}
