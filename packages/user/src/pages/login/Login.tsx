import { useLocation, useNavigate } from "react-router-dom";
import { Button, Input, Icon, IconColorType, OtpInput } from "@odd/components";

import { useAuth } from "./AuthProvide";

function LoginPage() {
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
    <p className="mt-8" style={{ fontSize: 12 }}>
      By signing up, you accept our
      <a href="#policy" className="text-primary">
        {" "}
        Terms of use
      </a>{" "}
      and
      <a href="#policy" className="text-primary">
        {" "}
        Privacy Policy
      </a>
    </p>
  );

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="w-1/2 h-auto max-w-xl mx-auto rounded-xl shadow-xl">
        <Button
          onClick={() => {}}
          className="relative float-right mr-2.5 mt-2.5"
        >
          <Icon
            iconName="close"
            iconColorType={IconColorType.gray}
            size="24"
            className="absolute top-2 right-2"
          />
        </Button>
        <div className="p-3">
          <h2 className="text-center text-xl p-3">Login / Signup</h2>
          <form onSubmit={handleSubmit}>
            <Input
              labelClassName="mb-2 text-gray text-xs font-medium"
              label="Enter your phone number"
              className="mt-3 text-xs font-medium"
              name="username"
              placeholder="Enter your mobile number"
              leading={<label className="whitespace-nowrap"> +91 |</label>}
            />
            <p className="mt-6 mb-3 text-gray font-medium text-xs">
              Enter the OTP sent to your Number
            </p>
            <OtpInput />
            <p className="text-primary mt-2 text-xs font-medium">
              <a href="/#">Resend OTP</a>
            </p>
            {login}
            <Button
              primary
              className="block w-full py-2 mt-8 text-base font-semibold mx-auto rounded-lg"
              onClick={() => {}}
            >
              Send OTP
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
