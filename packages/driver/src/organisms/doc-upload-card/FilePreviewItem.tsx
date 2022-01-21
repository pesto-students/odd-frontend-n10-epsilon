interface IProps {
  placeHolderImage: any;
  previewImage: any;
}

const FilePreviewItem: React.FC<IProps> = ({
  placeHolderImage = undefined,
  previewImage = undefined,
}) => {
  return (
    <div
      className="flex max-w-sm items-center mt-4 md:mt-10 h-full"
      style={{ color: "#E1FFFF", maxHeight: 210 }}
    >
      <img
        className="flex w-full h-full object-cover shadow-md rounded-xl"
        src={
          previewImage ??
          placeHolderImage ??
          require("../../assets/dummy-doc.svg").default
        }
        alt="doc file"
      />
    </div>
  );
};

export default FilePreviewItem;
