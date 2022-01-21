import { Button, Icon, Input } from "@odd/components";
import { Formik, Form, FormikProps } from "formik";

import React, { useEffect, useRef } from "react";
import { usePlacesWidget } from "react-google-autocomplete";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import Geocode from "react-geocode";
import { addDropOffInfo, addPickupInfo } from "../../redux/slices/order";
import { toast } from "react-toastify";
export enum Mode {
  pickUP,
  dropOff,
}

interface IProps {
  next(): void;
  mode: Mode;
}

export interface Values {
  add_1: string;
  add_2: string;
  contact_person_number: string;
  contact_person_name: string;
  instruction: string;
  complete_address: string;
  location: { coordinates: number[] };
}

Geocode.setApiKey("AIzaSyDtyq14eeHpWEwCYm50RjBhvt4GqeMENUg");

const get_address_by_coords = (lat: string, lng: string) =>
  new Promise((resolve, reject) => {
    // Get address from latitude & longitude.
    Geocode.fromLatLng(lat, lng).then(
      (response) => {
        resolve(response.results[0]);
      },
      (error) => {
        reject(error);
      }
    );
  });

const AddressInfoFormCard: React.FC<IProps> = ({ next, mode }: IProps) => {
  const dispatch = useDispatch();
  const state = useSelector((state: any) => state.order);

  const formRef: React.MutableRefObject<FormikProps<Values>> = useRef<any>();
  const validate = Yup.object({
    add_1: Yup.string().required("This is required"),
    add_2: Yup.string().required("This is required"),
    contact_person_number: Yup.string()
      .length(10, "Invalid number")
      .required("This is required"),
    contact_person_name: Yup.string().required("This is required"),
    "location.coordinates": Yup.array(),

    complete_address: Yup.string().when("location.coordinates", {
      is: (val: any) => val.length !== 2,
      then: Yup.string()
        .length(100000000, "Select location from lookup")
        .required("Select location from lookup"),
    }),
  });

  const { ref } = usePlacesWidget({
    apiKey: "AIzaSyBZmScOx6jJHhG9xg8pBcpC2-A7EFk1N2M",
    options: {
      types: [],
      componentRestrictions: { country: "IND" },
    },
    onPlaceSelected: (place: any) => {
      if (!place?.geometry) return;
      console.log(place);

      const latLong = [
        place.geometry.location.lat(),
        place.geometry.location.lng(),
      ];
      setAddress(place.address_components);
      formRef.current.setFieldValue("location.coordinates", latLong);
      formRef.current.setFieldValue(
        "complete_address",
        place.formatted_address
      );
    },
  });

  const getGpsLocation = () => {
    const id = toast.loading("Fetching location");
    navigator.geolocation.getCurrentPosition(async function (position) {
      try {
        const place: any = await get_address_by_coords(
          position.coords.latitude.toString(),
          position.coords.longitude.toString()
        );
        if (!place?.geometry) return;
        console.log(place);

        const latLong = [
          place.geometry.location.lat,
          place.geometry.location.lng,
        ];
        setAddress(place.address_components);
        formRef.current.setFieldValue("location.coordinates", latLong);
        formRef.current.setFieldValue(
          "complete_address",
          place.formatted_address
        );
      } catch (error) {
        toast.dismiss(id);
      }
      toast.dismiss(id);
      // console.log(address);
    });
  };

  const setAddress = (googleAddress: any) => {
    googleAddress.forEach((element: any) => {
      element.types.forEach((x: any) => {
        if (x === "street_number") {
          formRef.current.setFieldValue("add_1", element.long_name);
        }
        if (x === "sublocality_level_3") {
          formRef.current.setFieldValue(
            "add_2",
            formRef.current.values.add_2 + " " + element.long_name
          );
        }
        if (x === "sublocality_level_2") {
          formRef.current.setFieldValue(
            "add_2",
            formRef.current.values.add_2 + " " + element.long_name
          );
        }
        if (x === "sublocality_level_1") {
          formRef.current.setFieldValue(
            "add_2",
            formRef.current.values.add_2 + " " + element.long_name
          );
        }
      });
    });
  };

  const handleNumberChange = (value: string) => {
    if (value.match(/[^0-9]/g)) return;
    if (value.length > 10) return;
    // if value contains . / * - any other character it will return true
    formRef.current.setFieldValue("contact_person_number", value);
  };

  function onSubmit(value: Values): void {
    if (mode === Mode.pickUP) {
      dispatch(addPickupInfo(value));
    }
    if (mode === Mode.dropOff) {
      dispatch(addDropOffInfo(value));
    }
    formRef.current.resetForm();
    next();
  }

  useEffect(() => {
    if (mode === Mode.pickUP && Object.keys(state.pickup_info).length) {
      formRef.current.setValues(state.pickup_info);
    }
    if (mode === Mode.dropOff && Object.keys(state.drop_off_info).length) {
      formRef.current.setValues(state.drop_off_info);
    }
  });

  return (
    <Formik
      innerRef={formRef}
      initialValues={{
        add_1: "",
        add_2: "",
        contact_person_number: "",
        contact_person_name: "",
        instruction: "",
        complete_address: "",
        location: { coordinates: [] },
      }}
      validationSchema={validate}
      onSubmit={onSubmit}
      validateOnChange
    >
      {(formik) => (
        <Form className="mt-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="lg:col-span-2">
              <Input
                name="complete_address"
                label="Search Location"
                leading={
                  <Icon
                    iconName="icn-pin"
                    size="20"
                    className=" text-primary"
                  />
                }
                inputRef={ref}
                trailing={
                  <button type="button" onClick={getGpsLocation}>
                    <Icon
                      iconName="gps"
                      size="20"
                      className="ml-2 text-primary"
                    />
                  </button>
                }
              />
            </div>
            <div>
              <Input
                label="House / Flat / Floor No."
                required
                name="add_1"
                leading={
                  <Icon
                    iconName="icn-house"
                    size="20"
                    className="mr text-gray"
                  />
                }
              />
            </div>
            <div>
              <Input
                label="Area / Colony / Society Name"
                required
                name="add_2"
                leading={
                  <Icon iconName="icn-house" size="20" className=" text-gray" />
                }
              />
            </div>
            <div>
              <Input
                name="contact_person_name"
                label="Contact Name"
                leading={
                  <Icon iconName="icn-person" size="20" className="text-gray" />
                }
                required
              />
            </div>
            <div>
              <Input
                name="contact_person_number"
                onChange={(e) => handleNumberChange(e.target.value)}
                label="Contact Number"
                leading={
                  <Icon iconName="icn-call" size="20" className="text-gray" />
                }
                required
              />
            </div>
            <div className="lg:col-span-2">
              <Input
                name="instruction"
                label="Additional Instructions (Optional)"
              />
            </div>
            <div className="lg:col-span-2">
              <Button
                type="submit"
                className=" float-right mt-2 py-2 px-10 shadow-lg"
                children="Next"
                primary
              />
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default AddressInfoFormCard;
