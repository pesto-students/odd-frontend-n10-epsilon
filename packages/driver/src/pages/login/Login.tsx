import { useLocation, useNavigate } from "react-router-dom";
import {
  Button,
  Input,
  Icon,
  IconColorType,
  OtpInput,
  AppModal,
} from "@odd/components";

import { useAuth } from "./AuthProvide";
import { useEffect, useState } from "react";
import * as apiService from "../../api-call";
import { API } from "../../constant/Endpoints";
import { Formik, Form } from "formik";
import { CookieHelper } from "@odd/base";
import { useDispatch } from "react-redux";
import { addInfo } from "../../redux/slices/driver";

interface IProps {
  open: boolean;
  onClose: () => void;
}
interface MyFormValues {
  phone_number: string;
}

enum IStates {
  enter_number,
  enter_otp,
}

const LoginPage: React.FC<IProps> = (props: IProps) => {
  const [currentState, setCurrentState] = useState(IStates.enter_number);
  const [userId, setUserId] = useState(null);
  const [number, setNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const initialValues: MyFormValues = { phone_number: "" };
  let navigate = useNavigate();
  let location = useLocation();
  let auth = useAuth();
  const dispatch = useDispatch();
  let from = location.state?.from?.pathname || "/dashboard/home";

  useEffect(() => {
    if (auth.user) navigate("/dashboard/home", { replace: true });
  }, [auth.user, navigate]);

  async function handleSubmit(values: MyFormValues) {
    if (currentState === IStates.enter_number) {
      try {
        console.log(values);
        const api = API.DRIVER_ENDPOINTS.LOGIN;
        const result = await apiService.postApi(api, { mobile_number: number });
        const data = result.data;
        if (data && data.success) {
          setError("");
          setUserId(data.data._id);
          setCurrentState(IStates.enter_otp);
        } else {
          console.log(error);
          setError(data.error);
        }
      } catch (error) {
        console.log(error);
        setError("Entered phone number is not valid.");
      }
      return;
    }

    if (otp && otp.length === 4) {
      try {
        const api = API.DRIVER_ENDPOINTS.VERIFY_OTP;
        const result = await apiService.postApi(api, {
          otpVerify: otp,
          _id: userId,
        });
        const data = result.data;

        if (data && data.success) {
          dispatch(addInfo(data.data));
          CookieHelper.SetCookie("token", data.token);
          auth.signin(number, () => {
            navigate(from, { replace: true });
          });
        } else {
          setError(data.error);
        }
      } catch (error: any) {
        console.log(error);
        setError("Entered OTP is not valid.");
      }
    }
  }

  const handleNumberChange = (value: string) => {
    if (value.match(/[^0-9]/g)) return;
    // if value contains . / * - any other character it will return true
    setNumber(value);
  };

  return (
    <AppModal open={props.open}>
      <div
        className="text-left inline-block align-bottom w-full md:max-w-sm mx-4 md:mx-0 bg-white rounded-2xl overflow-hidden shadow-2xl transform transition-all sm:align-middle"
        style={{ maxWidth: 388, maxHeight: 335 }}
      >
        <Button
          onClick={() => {
            props.onClose();
          }}
          className="relative float-right mr-2.5 mt-2.5"
        >
          <Icon
            iconName="close"
            iconColorType={IconColorType.gray}
            size="24"
            className="absolute top-2 right-2"
          />
        </Button>
        <div className="px-4 md:px-6">
          <h2 className="text-center text-xl p-3">Login / Signup</h2>
          {error && (
            <div className="py-2 text-xs" style={{ color: "#FF0000" }}>
              {error}
            </div>
          )}
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
                name="phone_number"
                maxLength={10}
                minLength={10}
                value={number}
                onChange={(e) => handleNumberChange(e.target.value)}
                placeholder="Enter your phone number"
                leading={<label className="whitespace-nowrap"> +91 |</label>}
              />
              {currentState === IStates.enter_otp && (
                <div>
                  <p className="mt-6 text-gray font-medium text-xs">
                    Enter the OTP sent to your Number
                  </p>
                  <OtpInput
                    onChange={(value) => {
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
                  <p className="mt-8 text-xs">
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
                className="block w-full py-2 my-8 text-base font-semibold mx-auto rounded-lg"
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
    </AppModal>
  );
};

export default LoginPage;
