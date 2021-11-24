import { useLocation, useNavigate } from "react-router-dom";
import { Button, Input, Icon, IconColorType, OtpInput } from "@odd/components";

import { useAuth } from "./AuthProvide";
import { useState } from "react";

interface IProps {}

enum IStates {
  enter_number,
  enter_otp,
}

const LoginPage: React.FC<IProps> = (props: IProps & any) => {
  const [currentState, setCurrentState] = useState(IStates.enter_number);
  const [otp, setOtp] = useState("");

  let navigate = useNavigate();
  let location = useLocation();
  let auth = useAuth();

  let from = location.state?.from?.pathname || "/dashboard";

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    let formData = new FormData(event.currentTarget);
    let username = formData.get("username") as string;

    if (currentState === IStates.enter_number) {
      setCurrentState(IStates.enter_otp);
      return;
    }

    if (otp && otp.length === 4) {
      console.log("compare OTP with backend");
    }

    auth.signin(username, () => {
      navigate(from, { replace: true });
    });
  }

  return (
    <div className="flex h-screen items-center justify-center">
      <div
        className="w-1/2 h-auto mx-auto rounded-xl shadow-2xl"
        style={{ maxWidth: 388, maxHeight: 335 }}
      >
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
        <div className="px-6">
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
            {currentState === IStates.enter_otp && (
              <div>
                <p className="mt-6 mb-3 text-gray font-medium text-xs">
                  Enter the OTP sent to your Number
                </p>
                <OtpInput
                  onChange={(value) => {
                    console.log(`OTP Change to ${value}`);
                    setOtp(value);
                  }}
                />
                <p className="text-primary mt-2 mb-5 text-xs font-medium">
                  <a href="#resend">Resend OTP</a>
                </p>
              </div>
            )}
            {currentState === IStates.enter_number && (
              <div>
                <p className="my-8" style={{ fontSize: 8 }}>
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
              </div>
            )}

            <Button
              primary
              className="block w-full py-2 mb-8 text-base font-semibold mx-auto rounded-lg"
              onClick={() => {}}
              disabled={currentState === IStates.enter_otp && otp.length !== 4}
            >
              {currentState === IStates.enter_number && "Send OTP"}
              {currentState === IStates.enter_otp && "Next"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
