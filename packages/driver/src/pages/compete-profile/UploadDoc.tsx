import { CardLayout } from "@odd/components";
import { useSelector } from "react-redux";
import { DocumentListCard } from "../../organisms";
import { Driver } from "../../redux/slices/driver";

interface IProps {}

const CompleteDocument: React.FC<IProps> = () => {
  const state = useSelector((state: any) => state.driver.state) as Driver ;

  return (
    <CardLayout title={`📃 ${state.first_name}`} icon="">
      <DocumentListCard  />
    </CardLayout>
  );
  // return <NoRequestScreen />;
};

export default CompleteDocument;
