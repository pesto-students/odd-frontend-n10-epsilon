import { useEffect, useState } from "react";
import {
  Label,
  Icon,
  IconColorType,
  Select,
  FullScreenLoader,
} from "@odd/components";
import StatisticsItem from "./StatisticsItem";
import { useSelector } from "react-redux";

import { API } from "../../constant/Endpoints";
import * as apiService from "../../api-call";
import { ProfileReaders } from "../../helpers";

interface IProps {}

const Profile: React.FC<IProps> = (props: IProps & any) => {
  const isOnline = useSelector((state: any) => state.driver.isOnline);
  const driverData = useSelector((state: any) => state.driver.state);

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any>({});
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      try {
        const api = API.DRIVER_ENDPOINTS.PROFILE;
        const result = await apiService.getApi(api);
        const data = result.data;
        if (data && data.success) {
          console.log(data);
          setError("");
          setData(data.data);
        } else {
          console.log(data.error);
          setError(data.error);
        }
      } catch (error) {
        console.log(error);
        setError("Error while fetching order data.");
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  if (loading) {
    return <FullScreenLoader />;
  }

  if (error) {
    return (
      <div
        className="flex w-full h-full justify-center text-center items-center py-2 text-base z-10"
        style={{ color: "#FF0000" }}
      >
        {error}
      </div>
    );
  }

  return (
    <div className="relative m-auto lg:w-7/12 xs:w-11/12 lg:max-w-4xl">
      <div className="flex flex-row text-2xl font-semibold space-x-2">
        {isOnline ? "⭐ Great! You are Online" : "You are offline"}
      </div>
      <div className="rounded-2xl bg-white shadow-lg md:shadow-2xl py-2 md:py-6 px-2 md:px-8 mt-2 md:mt-6 space-y-6 md:space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 justify-center md:justify-between gap-2">
          <div className="col-span-1 md:col-span-2 flex flex-row space-x-6 items-center">
            <div className="flex flex-row">
              <img
                src={ProfileReaders.DriverImage(driverData)}
                alt="profile"
                className="w-20 h-20 rounded-full"
              />
            </div>
            <div className="flex-1 flex-row">
              <Label
                className="flex text-lg"
                medium
                title={ProfileReaders.DriverFullName(driverData)}
              />
              <div className="flex flex-row items-center space-x-2">
                <Icon
                  iconName="icn-level"
                  className="w-3 h-3"
                  iconColorType={IconColorType.primary}
                />
                <Label
                  className="text-sm"
                  medium
                  title={ProfileReaders.DriverLevel(driverData)}
                />
              </div>
              <div className="flex flex-row items-center space-x-2 ">
                <Icon
                  iconName="icn-star"
                  className="w-3 h-3"
                  iconColorType={IconColorType.primary}
                />
                <Label
                  className="text-sm"
                  medium
                  title={ProfileReaders.DriverRating(driverData)}
                />
              </div>
            </div>
          </div>
          <div className="col-span-1 flex-1 h-full my-auto">
            <div className="flex flex-col justify-start items-start md:justify-end md:items-end">
              <div className="flex gap-1 items-center place-items-center flex-row-reverse">
                <Label
                  title={`${data.earning} Rs.`}
                  primary
                  medium
                  className="text-xl lg:text-2xl font-medium"
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
          <div className="w-32 hidden">
            <Select
              outline={false}
              defaultOptions={["Last 7 Days", "Last Month", "All Time"]}
              onSelectionChange={(value: string) => {
                console.log(`New Selected ${value}`);
              }}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center place-content-between mt-6 gap-2 md:gap-8">
          <StatisticsItem
            iconName="icn-state-time"
            label="Hours Online"
            value={'-'}
          />
          <StatisticsItem
            iconName="icn-state-distance"
            label="Total Distance"
            value={data.distance.toFixed(1)}
          />
          <StatisticsItem
            iconName="icn-state-trip"
            label="Total Trips"
            value={data.order ?? 0}
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
