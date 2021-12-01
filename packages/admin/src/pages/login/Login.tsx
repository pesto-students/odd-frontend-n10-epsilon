import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthProvide";
import { Button, Input } from "@odd/components";

import "./style.css";
import { Form, Formik } from "formik";

interface MyFormValues {
  email: string;
  password: string;
}

function LoginPage() {
  let navigate = useNavigate();
  let location = useLocation();
  let auth = useAuth();
  const initialValues: MyFormValues = { email: "", password: "" };
  let from = location.state?.from?.pathname || "/dashboard";

  function handleSubmit(value: MyFormValues) {
    auth.signin(value.email, () => {
      navigate(from, { replace: true });
    });
  }

  return (
    <div className="w-screen h-screen">
      <div className="relative flex h-full">
        <img
          src={require("../../assets/background.svg").default}
          alt="img"
          className="absolute top-0 right-0 h-full w-full object-cover"
        />
        <div className="flex h-full w-full min-w-sm z-0">
          <div className="flex-1 my-auto p-3">
            <div className=" m-auto flex-1 items-center bg-white	 mt-25vh shadow-2xl max-w-md p-10 rounded-lg">
              <h2 className="text-center text-2xl font-semibold mb-10">
                Login as Admin
              </h2>
              <Formik
                initialValues={initialValues}
                onSubmit={(values) => {
                  handleSubmit(values);
                }}
              >
                <Form>
                  <Input fieldStyle="legacy" label="Email" name="email" />
                  <Input
                    fieldStyle="legacy"
                    label="Password"
                    className="mt-6"
                    name="password"
                  />
                  <Button
                    primary
                    block
                    className="rounded-xl mt-8"
                    onClick={() => {}}
                  >
                    Login
                  </Button>
                </Form>
              </Formik>
            </div>
          </div>
          <div className="flex-none sm:flex-1 justify-items-center" />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
