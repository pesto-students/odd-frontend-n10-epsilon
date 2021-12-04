import { CardLayout } from "@odd/components";
import {  ProfileCard } from "../../organisms";

interface IProps {}

const CompleteProfile: React.FC<IProps> = () => {
  return (
    <CardLayout title="📃 PARTNER PROFILE" icon="">
      <ProfileCard  />
    </CardLayout>
  );
  // return <NoRequestScreen />;
};

export default CompleteProfile;
