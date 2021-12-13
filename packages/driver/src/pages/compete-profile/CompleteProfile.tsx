import { CardLayout } from "@odd/components";
import { useEffect } from "react";
import { ProfileCard } from "../../organisms";

interface IProps {}

const CompleteProfile: React.FC<IProps> = () => {
  useEffect(() => {
    document.title = "Complete Profile - Driver App";
  }, []);

  return (
    <CardLayout title="📃 PARTNER PROFILE" icon="">
      <ProfileCard />
    </CardLayout>
  );
  // return <NoRequestScreen />;
};

export default CompleteProfile;
