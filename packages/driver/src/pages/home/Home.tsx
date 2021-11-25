import { CardLayout, Icon, IconColorType } from "@odd/components";

import { ProfileCard } from "../../organisms";

interface IProps {}

const Home: React.FC<IProps> = () => {
  return (
    <CardLayout
      icon={
        <Icon
          iconName="icn-parcel"
          iconColorType={IconColorType.gray}
          className="ml-3 mt-1"
        />
      }
      title={"000011"}
    >
      <ProfileCard />
    </CardLayout>
  );
};

export default Home;
