import { Button, Label } from "@odd/components";
import { FilePreviewItem, FileUploadItem } from ".";

interface IProps {
  title?: string;
  onSubmit?(): void;
}

const DocumentUploadCard: React.FC<IProps> = ({ title, onSubmit }) => {
  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-2 lg:grid-cols-5 pl-5 pt-10 gap-4">
        <Label
          title={
            title ??
            `Submit Photo of both side of your Aadhaar Card. Image must not be blurry. Details must be visible clearly.`
          }
          className="text-sm font-medium col-span-1 lg:col-span-3"
          style={{ color: "#696969" }}
        />
      </div>
      <div className="flex flex-row justify-between px-3 py-4">
        <div className="flex-1 flex-col divide-y-2">
          <FilePreviewItem />
        </div>
        <div className="flex flex-col divide-y-2 ">
          <FileUploadItem
            onSubmit={() => {
              console.log("Doc Uploaded");
            }}
          />
        </div>
      </div>
      <div className="lg:col-span-2">
        <Button
          className="float-right mt-2 py-2 px-10 shadow-lg"
          children="Next"
          primary
          shadow
          onClick={onSubmit}
        />
      </div>
    </div>
  );
};

export default DocumentUploadCard;
