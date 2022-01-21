import { Button, DocUploadListItem, Label } from "@odd/components";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getApi, postApi } from "../../api-call";
import { API } from "../../constant/Endpoints";
import { addInfo, setValue } from "../../redux/slices/driver";

interface IProps {}

const DocumentListCard: React.FC<IProps> = () => {
  const state = useSelector((state: any) => state.driver.doc);
  const isFetch = useSelector((state: any) => state.driver.docFetch);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const getMyDetails = useCallback(async () => {
    if (isFetch) return;
    const api = API.DRIVER_ENDPOINTS.MY_DETAILS;
    const id = toast.loading("Please wait...");
    try {
      const result = await getApi(api);
      const data = result.data;
      if (data && data.success) {
        dispatch(setValue(result.data.data));
        console.log(state);
      } else {
        console.log(data.error);
      }
      toast.dismiss(id);
    } catch (error) {
      toast.dismiss(id);
      console.log(error);
    }
  }, [dispatch, state, isFetch]);

  const handleSubmit = async () => {
    const api = API.DRIVER_ENDPOINTS.UPDATE_PROFILE;
    setLoading(true);
    try {
      const result = await postApi(api, { document_submitted: true });
      navigate("/dashboard/home", { replace: true });
      dispatch(addInfo(result.data.data));
    } catch (error: any) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMyDetails();
  }, [dispatch, getMyDetails]);

  // const checkAllDoc = () => {
  //   for (let doc in state) {
  //     if (!state[doc].completed) return false;
  //   }
  //   return true;
  // };
  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-1 lg:grid-cols-3 pl-5 pt-10 gap-4">
        <Label
          title="Provide us the required documents and details to set up your account."
          className="text-sm font-medium"
          style={{ color: "#696969" }}
        />
      </div>
      <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 px-2 md:px-3 py-2 md:py-4">
        <DocUploadListItem
          title={state.profile_photo.title}
          completed={state.profile_photo.completed}
          path={state.profile_photo.name}
        />
        <DocUploadListItem
          title="Vehicle Type"
          path="vehicle_type"
          completed={state.vehicle_type.completed}
        />
        <DocUploadListItem
          title={state.pan_card.title}
          completed={state.pan_card.completed}
          path={state.pan_card.name}
        />
        <DocUploadListItem
          title={state.registration_card.title}
          completed={state.registration_card.completed}
          path={state.registration_card.name}
        />
        <DocUploadListItem
          title={state.aadhar_card.title}
          completed={state.aadhar_card.completed}
          path={state.aadhar_card.name}
        />
        <DocUploadListItem
          title={state.driving_licence.title}
          completed={state.driving_licence.completed}
          path={state.driving_licence.name}
        />
        <DocUploadListItem
          title={state.vehicle_insurance.title}
          completed={state.vehicle_insurance.completed}
          path={state.vehicle_insurance.name}
        />
      </div>
      <div className="lg:col-span-2">
        <Button
          className="float-right mt-2 py-2 px-10 shadow-lg"
          children="Submit"
          primary
          // disabled={!checkAllDoc() || loading}
          disabled={loading}
          shadow
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
};

export default DocumentListCard;
