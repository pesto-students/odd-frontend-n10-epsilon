import { Button, DocUploadListItem, Label } from "@odd/components";

interface IProps {
  onSubmit(): void;
}

const DocumentListCard: React.FC<IProps> = ({ onSubmit }) => {
  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-1 lg:grid-cols-3 pl-5 pt-10 gap-4">
        <Label
          title="Provide us the required documents and details to set up your account."
          className="text-sm font-medium"
          style={{ color: "#696969" }}
        />
      </div>
      <div className="flex flex-row gap-4 px-3 py-4">
        <div className="flex-1 flex-col divide-y-2 divide-gray">
          <DocUploadListItem title="Profile Photo" completed />
          <DocUploadListItem title="Vehicle Type" />
          <DocUploadListItem title="PAN Card" />
          <DocUploadListItem title="Registration Certificate (RC)" />
        </div>
        <div className="flex-1 flex-col divide-y-2 divide-gray">
          <DocUploadListItem title="Aadhaar Card" />
          <DocUploadListItem title="Driving License" />
          <DocUploadListItem title="Vehicle Insurance" />
        </div>
      </div>
      <div className="lg:col-span-2">
        <Button
          className="float-right mt-2 py-2 px-10 shadow-lg"
          children="Submit"
          primary
          shadow
          onClick={onSubmit}
        />
      </div>
    </div>
  );
};

export default DocumentListCard;
