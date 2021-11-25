// import { useState } from "react";

// import { CardLayout, Icon, IconColorType } from "@odd/components";
import {
  ThanksCard,
  // SelectVehicleCard,
  // DocumentListCard,
  // DocumentUploadCard,
  // ProfileCard,
} from "../../organisms";

interface IProps {}

const Home: React.FC<IProps> = () => {
  // const [title, setTitle] = useState("SUBMIT AADHAAR CARD");

  return (
    // <CardLayout
    //   icon={
    //     // <Icon
    //     //   iconName="icn-parcel"
    //     //   iconColorType={IconColorType.gray}
    //     //   className="ml-3 mt-1"
    //     // />
    //     <></>
    //   }
    //   // title={title}
    //   title={"SELECT VEHICLE"}
    // >
    //   {/* <ProfileCard /> */}
    //   {/* <DocumentUploadCard
    //     onSubmit={() => {
    //       console.log("Documents Uploaded");
    //     }}
    //   /> */}
    //   {/* <DocumentListCard
    //     onSubmit={() => {
    //       console.log("Documents Uploaded");
    //     }}
    //   /> */}
    //   {/* <SelectVehicleCard
    //     onSubmit={() => {
    //       console.log("Vehicle Selected");
    //     }}
    //   /> */}
    // </CardLayout>
    <ThanksCard />
  );
};

export default Home;
