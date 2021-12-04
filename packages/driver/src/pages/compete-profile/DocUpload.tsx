import { CardLayout } from "@odd/components";
import { useSelector } from "react-redux";
import { DocumentUploadCard } from "../../organisms";
import { Driver } from "../../redux/slices/driver";

interface IProps {}

const DocumentUpload: React.FC<IProps> = () => {
  const state = useSelector((state: any) => state.driver.state) as Driver;
  return (
    <CardLayout title={`📃 ${state.first_name}`} icon="">
      <DocumentUploadCard onSubmit={() => {}} />
    </CardLayout>
  );
  // return <NoRequestScreen />;
};

export default DocumentUpload;
