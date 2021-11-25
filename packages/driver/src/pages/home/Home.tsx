// import { useState } from "react";
// import { Button, CardLayout, Icon, IconColorType } from "@odd/components";

import {
  // ThanksCard,
  // SelectVehicleCard,
  // DocumentListCard,
  // DocumentUploadCard,
  // ProfileCard,
  OtpConfirmDialog,
} from "../../organisms";

interface IProps {}

const Home: React.FC<IProps> = () => {
  // const [title, setTitle] = useState("SUBMIT AADHAAR CARD");
  return (
    <div>
      <OtpConfirmDialog
        title="Pick-Up"
        description="Enter the OTP to Pick-up package"
      />

      <OtpConfirmDialog
        title="Drop-Off"
        description="Enter the OTP to Drop-off package"
      />
    </div>
  );

  // return (
  //   <CardLayout
  //     icon={
  //       <Icon
  //         iconName="icn-parcel"
  //         iconColorType={IconColorType.gray}
  //         className="ml-3 mt-1"
  //       />
  //     }
  //     title={title}
  //   >
  //     {/* <ProfileCard /> */}
  //     {/* <DocumentUploadCard
  //       onSubmit={() => {
  //         console.log("Documents Uploaded");
  //       }}
  //     /> */}
  //     {/* <DocumentListCard
  //       onSubmit={() => {
  //         console.log("Documents Uploaded");
  //       }}
  //     /> */}
  //     {/* <SelectVehicleCard
  //       onSubmit={() => {
  //         console.log("Vehicle Selected");
  //       }}
  //     /> */}
  //     {/* <ThanksCard /> */}
  //   </CardLayout>
  // );
};

export default Home;
