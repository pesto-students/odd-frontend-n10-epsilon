import { useLocation, useNavigate } from "react-router-dom";
import { Button, Input, Icon, IconColorType, OtpInput } from "@odd/components";

import { useAuth } from "./AuthProvide";
import { useState } from "react";
import * as apiService from "../../api-call";
import { API } from "../../constant/Endpoints";
import { Formik, Form } from "formik";
import { CookieHelper } from "@odd/base";

import { toast } from "react-toastify";
interface IProps {}

interface MyFormValues {
  mobile_number: string;
}

enum IStates {
  enter_number,
  enter_otp,
}

const LoginPage: React.FC<IProps> = (props: IProps & any) => {
  const [currentState, setCurrentState] = useState(IStates.enter_number);
  const [userId, setUserId] = useState(null);
  const [number, setNumber] = useState("");
  const [otp, setOtp] = useState("");
  const initialValues: MyFormValues = { mobile_number: "" };
  let navigate = useNavigate();
  let location = useLocation();
  let auth = useAuth();

  let from = location.state?.from?.pathname || "/dashboard";

  async function handleSubmit(value: MyFormValues) {
    if (currentState === IStates.enter_number) {
      const id = toast.loading("Please wait...");
      try {
        console.log(value);

        const api = API.DRIVER_ENDPOINTS.LOGIN;
        const data = await apiService.postApi(api, { mobile_number: number });
        toast.dismiss(id);
        setUserId(data.data.data._id);
        setCurrentState(IStates.enter_otp);
      } catch (error: any) {
        toast.dismiss(id);
        toast.error(error?.error);
      }
      return;
    }

    if (otp && otp.length === 4) {
      const id = toast.loading("Please wait...");
      try {
        const api = API.DRIVER_ENDPOINTS.VERIFY_OTP;
        const data = await apiService.postApi(api, {
          otpVerify: otp,
          _id: userId,
        });
        CookieHelper.SetCookie("token", data.data.token);
        console.log(data.data.data.profile_completed);

        if (!data.data.data.profile_completed) {
          from = "/dashboard/completeProfile";
        }
        if (
          data.data.data.profile_completed &&
          !data.data.data.document_submitted
        ) {
          from = "/dashboard/completeProfile/doc";
        }
        navigate(from, { replace: true });
        auth.signin(number, () => {
          toast.dismiss(id);
          toast.success("Logged In");
        });
      } catch (error: any) {
        console.log(error?.data?.error);
        toast.dismiss(id);
        toast.error(error?.data?.error);
      }
      console.log("compare OTP with backend");
    }
  }
  const handleNumberChange = (value: string) => {
    if (value.match(/[^0-9]/g)) return;
    // if value contains . / * - any other character it will return true
    setNumber(value);
  };

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
          <Formik
            initialValues={initialValues}
            onSubmit={(values) => {
              handleSubmit(values);
            }}
          >
            <Form>
              <Input
                labelClassName="mb-2 text-gray text-xs font-medium"
                label="Enter your phone number"
                className="mt-3 text-xs font-medium"
                name="mobile_number"
                maxLength={10}
                minLength={10}
                value={number}
                onChange={(e) => handleNumberChange(e.target.value)}
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
                disabled={
                  (currentState === IStates.enter_number &&
                    number.length !== 10) ||
                  (currentState === IStates.enter_otp && otp.length !== 4)
                }
              >
                {currentState === IStates.enter_number && "Send OTP"}
                {currentState === IStates.enter_otp && "Next"}
              </Button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
