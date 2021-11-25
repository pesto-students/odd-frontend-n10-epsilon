import { Label, Icon, IconColorType, Select } from "@odd/components";
import StatisticsItem from "./StatisticsItem";

interface IProps {}

const Profile: React.FC<IProps> = (props: IProps & any) => {
  return (
    <div className="relative m-auto md:w-7/12 xs:w-11/12 max-w-4xl">
      <div className="flex flex-row text-2xl font-semibold space-x-2">
        ⭐ Great! You are Online
      </div>
      <div className="rounded-2xl bg-white shadow-2xl py-16 px-20 mt-6">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row space-x-6 items-center">
            <div className="flex flex-row">
              <img
                src={require("../../assets/driver.svg").default}
                alt="profile"
                className="w-20 h-20 rounded-full"
              />
            </div>
            <div className="flex-1 flex-row">
              <Label
                className="flex text-lg"
                medium
                title="Dharmendra Jagodana"
              />
              <div className="flex flex-row items-center space-x-2">
                <Icon
                  iconName="icn-level"
                  className="w-3 h-3"
                  iconColorType={IconColorType.primary}
                />
                <Label className="text-sm" medium title="Level 1" />
              </div>
              <div className="flex flex-row items-center space-x-2 ">
                <Icon
                  iconName="icn-star"
                  className="w-3 h-3"
                  iconColorType={IconColorType.primary}
                />
                <Label className="text-sm" medium title="4.99" />
              </div>
            </div>
          </div>

          <div className="flex-1 h-full my-auto">
            <div className="flex flex-col justify-end items-end">
              <div className="flex gap-1 items-center place-items-center flex-row-reverse">
                <Label
                  title={"2600 Rs."}
                  primary
                  medium
                  className="text-2xl font-medium"
                />
                <Icon
                  iconName="icn-rupee"
                  iconColorType={IconColorType.gray}
                  className="w-6 h-6"
                />
              </div>
              <Label title="Earned" />
            </div>
          </div>
        </div>
        <div className="mt-11 flex flex-row items-center space-x-4 my-auto">
          <Label
            title="METRICS"
            primary
            className="flex align-text-bottom h-full text-base font-semibold"
          />
          <div className="w-32">
            <Select
              outline={false}
              defaultOptions={["Last 7 Days", "Last Month", "All Time"]}
              onSelectionChange={(value: string) => {
                console.log(`New Selected ${value}`);
              }}
            />
          </div>
        </div>
        <div className="flex flex-row place-content-between mt-6">
          <StatisticsItem
            iconName="icn-state-time"
            label="Hours Online"
            value="10"
          />
          <StatisticsItem
            iconName="icn-state-distance"
            label="Total Distance"
            value="25"
          />
          <StatisticsItem
            iconName="icn-state-trip"
            label="Total Trips"
            value="15"
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
