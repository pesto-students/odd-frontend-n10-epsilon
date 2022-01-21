import { Button, Input, Label, Select } from "@odd/components";
import { Formik, Form, FormikProps } from "formik";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { postApi } from "../../api-call";
import { API } from "../../constant/Endpoints";
import { addInfo } from "../../redux/slices/driver";

interface IProps {
  next?(): void;
}

interface Values {
  first_name: string;
  last_name: string;
  languages: string;
  city_postal_code: string;
  email?: string;
  state: string;
}

const ProfileCard: React.FC<IProps> = ({ next }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const driverState = useSelector((state: any) => state.driver.state);

  useEffect(() => {
    console.log(driverState);
    formRef.current.setValues({
      first_name: driverState?.first_name ?? "",
      last_name: driverState?.last_name ?? "",
      languages: driverState?.languages ?? "English",
      city_postal_code: driverState.city_postal_code ?? "",
      email: driverState.email ?? "",
      state: driverState.state ?? "Madhya pradesh",
    });
  }, [driverState]);

  const formRef: React.MutableRefObject<FormikProps<Values>> = useRef<any>();
  const validate = Yup.object({
    first_name: Yup.string().required("This is required"),
    last_name: Yup.string().required("This is required"),
    languages: Yup.string(),
    city_postal_code: Yup.string()
      .length(6, "Postal code should be of 6 number")
      .required("This is required"),
    email: Yup.string().email("Invalid email address"),
    state: Yup.string(),
  });

  const handleNumberChange = (value: string) => {
    if (value.match(/[^0-9]/g)) return;
    if (value.length > 6) return;
    // if value contains . / * - any other character it will return true
    formRef.current.setFieldValue("city_postal_code", value);
  };

  const handleSubmit = async (value: Values) => {
    const id = toast.loading("Please wait...");
    try {
      const api = API.DRIVER_ENDPOINTS.UPDATE_PROFILE;
      if (!value.email) delete value.email;
      await postApi(api, value);
      dispatch(addInfo(value));
      toast.dismiss(id);
      navigate("doc", { replace: true });
      toast.success("Profile updated successfully");
    } catch (error: any) {
      toast.dismiss(id);
      toast.error(error.data.error);
    }
  };

  return (
    <Formik
      initialValues={{
        first_name: driverState?.first_name ?? "",
        last_name: driverState?.last_name ?? "",
        languages: driverState?.languages ?? "English",
        city_postal_code: driverState.city_postal_code ?? "",
        email: driverState.email ?? "",
        state: driverState.state ?? "Madhya pradesh",
      }}
      onSubmit={handleSubmit}
      innerRef={formRef}
      validationSchema={validate}
    >
      <Form className="flex flex-col">
        <div className="grid grid-cols-1 lg:grid-cols-3 pt-6 gap-4">
          <Label
            title="Welcome to Team ODD! Please fill the details below to register."
            className="text-sm font-medium"
            style={{ color: "#696969" }}
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 pt-7 pb-4">
          <Input label="First Name" name="first_name" required />
          <Input label="Last Name" name="last_name" required />
          <Input
            label="City Pincode"
            onChange={(e) => handleNumberChange(e.target.value)}
            name="city_postal_code"
            required
          />
          <Select
            label="State"
            labelClassName="mb-2"
            required
            defaultOptions={["Madhya pradesh", "Gujarat"]}
            onSelectionChange={(value: string) => {
              formRef.current.setFieldValue("state", value);
            }}
          />
          <Select
            label="Language"
            labelClassName="mb-2"
            defaultOptions={["English", "Hindi"]}
            onSelectionChange={(value: string) => {
              formRef.current.setFieldValue("languages", value);
            }}
          />
          <Input label="Email Address (Optional)" name="email" />
          <div className="lg:col-span-2">
            <Button
              onClick={() => {
                console.log(formRef.current.values);
              }}
              className=" float-right mt-2 py-2 px-12 shadow-lg"
              children="Next"
              primary
              shadow
            />
          </div>
        </div>
      </Form>
    </Formik>
  );
};

export default ProfileCard;
