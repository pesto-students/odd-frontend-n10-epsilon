import { Button } from "@odd/components";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
interface IProps {
  onSubmit(): void;
  getInputProps: any;
  getRootProps: any;
}

const FileUploadItem: React.FC<IProps> = ({
  onSubmit,
  getInputProps,
  getRootProps,
}) => {
  return (
    <div
      {...getRootProps()}
      className="flex flex-col max-w-xs items-center rounded-xl pt-7 px-6 pb-6"
      style={{
        color: "#E1FFFF",
        backgroundColor: "#E1FFFF",
        maxWidth: 261,
        minWidth: 261,
      }}
    >
      <img
        src={require("../../assets/doc-upload.svg").default}
        alt="doc upload"
        className=" w-12 h-12"
      />
      <div
        style={{ color: "#323232" }}
        className="font-semibold text-lg opacity-70 items-center text-center mt-4"
      >
        <span>Drag &amp; Drop</span>
        <br />
        <span>Your Files Here</span>
      </div>

      <div
        style={{ color: "#323232" }}
        className="flex flex-row w-full font-semibold text-lg mt-4 text-center items-center opacity-20 space-x-2"
      >
        <div className="line flex-1 h-px bg-black"></div>
        <span>OR</span>
        <div className="line flex-1 h-px bg-black"></div>
      </div>
      <div className="flex mt-4 w-full">
        <Button
          onClick={() => {
            onSubmit();
          }}
          className="flex-1 py-1 px-5 shadow-lg"
          children="Browse Files"
          primary
          shadow
        />
        <input {...getInputProps()} />
      </div>
    </div>
  );
};

export default FileUploadItem;
