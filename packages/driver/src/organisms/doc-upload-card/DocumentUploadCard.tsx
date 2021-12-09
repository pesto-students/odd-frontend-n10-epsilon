import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Label } from "@odd/components";
import { FilePreviewItem, FileUploadItem } from ".";
import { uploadFilePostApi } from "../../api-call";
import { API } from "../../constant/Endpoints";
import { updateDoc } from "../../redux/slices/driver";

interface IProps {
  title?: string;
  onSubmit?(): void;
}

const DocumentUploadCard: React.FC<IProps> = ({ title, onSubmit }) => {
  const { type } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const state = useSelector((state: any) => state.driver.doc);

  const onDrop: any = useCallback((acceptedFiles: File[]) => {
    setFile(acceptedFiles[0]);
    setPreviewImage(URL.createObjectURL(acceptedFiles[0]));
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: false,
    maxFiles: 2,
  });

  const [file, setFile] = useState(null as File | null);
  const [previewImage, setPreviewImage] = useState(
    state[type as string].url as string | null
  );
  const [loading, setLoading] = useState(false);

  const uploadFile = async () => {
    const api = API.DRIVER_ENDPOINTS.UPLOAD_DOC;
    const formData = new FormData();
    formData.append("file", file as any, file?.name);
    formData.append("type", type as string);
    try {
      setLoading(true);
      const result = await uploadFilePostApi(api, formData);
      dispatch(updateDoc({ type, path: result.data.data }));
      setLoading(false);
      navigate("/dashboard/completeProfile/doc", { replace: true });
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-1 md:grid-cols-5 md:pl-5 md:pt-10 gap-4">
        <Label
          title={title ?? state[type as string].title}
          className="text-2xl font-medium col-span-1 md:col-span-2"
          style={{ color: "#000000" }}
        />
        <Label
          title={title ?? state[type as string].content}
          className="text-sm font-medium col-span-1 md:col-span-3"
          style={{ color: "#696969" }}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-between px-1 md:px-3 py-2 md:py-4 gap-4">
        <div className="flex w-full h-full justify-center md:justify-start items-center md:items-start">
          <FilePreviewItem
            previewImage={previewImage}
            placeHolderImage={state[type as string].img}
          />
        </div>
        <div className="flex w-full h-full justify-center md:justify-end items-center md:items-end">
          <FileUploadItem
            getRootProps={getRootProps}
            getInputProps={getInputProps}
            onSubmit={() => {
              console.log("Doc Uploaded");
            }}
          />
        </div>
      </div>
      <div className="lg:col-span-2">
        <Button
          className="float-right mt-2 py-2 px-10 shadow-lg"
          disabled={!file || loading}
          children="Next"
          primary
          shadow
          onClick={uploadFile}
        />
      </div>
    </div>
  );
};

export default DocumentUploadCard;
