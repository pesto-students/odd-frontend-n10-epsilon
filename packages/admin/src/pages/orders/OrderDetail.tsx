import { useState, useEffect } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";

import {
  Button,
  FullScreenLoader,
  Icon,
  IconColorType,
  Label,
  LabeledIcon,
  SteppedAddresses,
} from "@odd/components";
import { API } from "../../constant/Endpoints";
import * as apiService from "../../api-call";

import DummyMap from "../../assets/dummymap.svg";

const OrderDetail: React.FC<any> = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any>({});
  let navigate = useNavigate();
  let location = useLocation();
  let params = useParams();
  let from = location.state?.from?.pathname || "/dashboard/order";
  const order_id = params.id;

  useEffect(() => {
    async function loadData() {
      const api = API.ADMIN_ENDPOINTS.ORDERS_INFO(String(order_id));
      try {
        const result = await apiService.getApi(api);
        const data = result.data;
        console.log(data);
        setData(data.data);
      } catch (error) {
        setData({});
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, [order_id]);

  if (loading) {
    return <FullScreenLoader />;
  }

  return (
    <>
      <div className="flex justify-between px-6 h-16 bg-white items-center">
        <div className="text-2xl font-bold">Order Details</div>
      </div>
      <div className="px-2 md:px-6 mt-4 float-auto">
        {/* Title Panel */}
        <div className="flex justify-between items-center">
          <Label
            title={`Order Id: #${data?.order_id ?? "000-000-000"}`}
            primary
            regular
            className="text-base"
          />
          <div className="flex space-x-4 justify-center items-center text-center">
            <Button
              outlined
              className="h-10 md:h-11 w-24 md:w-28 rounded md:rounded-xl text-center"
              onClick={() => {
                navigate(from, { replace: true });
              }}
            >
              <Label title="Back" primary />
            </Button>

            {/* <Button
              primary
              className="h-11 w-64 rounded-2xl"
              onClick={() => {
                console.log("On Download Invoice Pressed");
              }}
            >
              <Label title="Download Invoice" />
            </Button> */}
          </div>
        </div>
        {/* Data Panel */}
        <div className="bg-white rounded-md md:rounded-2xl mt-6 md:py-7 px-2 md:px-11">
          <div className="grid grid-flow-row lg:grid-flow-col grid-cols-1 lg:grid-cols-3 xl:grid-cols-12 gap-2 md:gap-4 lg:gap-0">
            <div className="col-span-1 lg:col-span-2 xl:col-span-9 w-full pt-2">
              <div className="grid  grid-cols-3 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-9 grid-rows-4 gap-4 md:gap-1 lg:gap-4 xl:gap-4">
                {/* User */}
                <div className="order-0 md:order-0 col-span-2 md:col-span-1 lg:col-span-1 xl:col-span-3 space-y-4 justify-center items-center">
                  <TitleLabel title="User" />
                  <div className="flex flex-row space-x-3 items-center">
                    <div className="flex h-11 w-11 mx-auto ">
                      <img
                        src={data?.user?.profile ?? DummyMap}
                        alt="user profile"
                        className="rounded-full"
                      />
                    </div>
                    <div className="flex-1 flex-row">
                      <Label
                        className="flex text-base md:text-lg"
                        medium
                        title={data?.user?.phone ?? "Phone Number"}
                      />
                      <div className="flex flex-row items-center space-x-2">
                        <Icon
                          iconName="icn-rupee"
                          className="w-5 h-5"
                          iconColorType={IconColorType.black}
                        />
                        <Label
                          className="text-base md:text-2xl"
                          medium
                          title={`${data?.rate ?? 0} Rs.`}
                          primary
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* Driver */}
                <div className="order-2 md:order-1 col-span-2 md:col-span-1 lg:col-span-1 xl:col-span-3 space-y-4 justify-center items-center">
                  <TitleLabel title="Driver" />
                  <div className="flex flex-row space-x-3 items-center">
                    <div className="flex h-11 w-11 mx-auto ">
                      <img
                        src={data?.driver?.profile ?? DummyMap}
                        alt="driver profile"
                        className="rounded-full"
                      />
                    </div>
                    <div className="flex-1 flex-row">
                      <Label
                        className="flex text-base md:text-lg"
                        medium
                        title={data?.driver?.name ?? "Driver Name"}
                      />
                      {/* <div className="flex flex-row items-center space-x-2">
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
                  </div> */}
                    </div>
                  </div>
                </div>
                {/* Vehicle */}
                <div className="order-1 md:order-2 col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1 space-y-4 justify-start items-start xl:justify-center xl:items-center xl:text-center flex-1">
                  <TitleLabel title="Vehicle" />
                  <div className="h-11 w-11 flex-1 xl:mx-auto">
                    <img src={data?.vehicle ?? DummyMap} alt="vehicle" />
                  </div>
                </div>
                {/* Date and Time */}
                <div className="order-3 md:order-3 col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-2 space-y-4 justify-start items-start xl:justify-center xl:items-center xl:text-center">
                  <TitleLabel title="Date &amp; Time" />
                  <div className="flex flex-col">
                    <Label title={data?.date ?? "Date"} medium />
                    <Label title={data?.time ?? "Time"} medium />
                  </div>
                </div>
                {/* Pick And Drop */}
                <div className="order-4 col-span-full space-x-4 row-span-4 h-60 md:h-auto lg:row-span-4 xl:row-span-3 py-2 md:py-2 lg:py-4 xl:py-8">
                  <div className="grid grid-flow-col h-full w-full">
                    <div className="col-span-3 md:col-span-6 xl:col-span-4 row-span-4 mx-2">
                      <SteppedAddresses
                        pickAddressTitle={
                          data?.pickup_info?.contact_person_name ??
                          "Pick Address Title"
                        }
                        pickAddressFull={
                          data?.pickup_info?.contact_person_name ??
                          "Pick Address Full"
                        }
                        dropAddressTitle={
                          data?.pickup_info?.contact_person_name ??
                          "Drop Address Title"
                        }
                        dropAddressFull={
                          data?.pickup_info?.contact_person_name ??
                          "Drop Address Full"
                        }
                      />
                    </div>
                    {/* Person Phone and Name */}
                    <div className="col-span-1 md:col-span-2 xl:col-span-4 row-span-4 flex flex-col justify-between mt-2">
                      <div>
                        <LabeledIcon
                          iconName="icn-User"
                          iconColorType={IconColorType.primary}
                          title={
                            data?.pickup_info?.contact_person_name ??
                            "User Name"
                          }
                          reverse
                          fontSize={14}
                          iconSize={12}
                        />
                        <LabeledIcon
                          iconName="icn-phone"
                          iconColorType={IconColorType.primary}
                          title={
                            data?.pickup_info?.contact_person_number ??
                            "1234567890"
                          }
                          reverse
                          fontSize={14}
                          iconSize={12}
                        />
                      </div>
                      <div>
                        <LabeledIcon
                          iconName="icn-User"
                          iconColorType={IconColorType.primary}
                          title={
                            data?.drop_off_info?.contact_person_name ??
                            "User Name"
                          }
                          reverse
                          fontSize={14}
                          iconSize={12}
                        />
                        <LabeledIcon
                          iconName="icn-phone"
                          iconColorType={IconColorType.primary}
                          title={
                            data?.drop_off_info?.contact_person_number ??
                            "1234567890"
                          }
                          reverse
                          fontSize={14}
                          iconSize={12}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Route */}
            <div className="col-span-1 lg:col-span-1 xl:col-span-3 h-full">
              <div className="col-span-3 row-span-1 space-y-4 justify-between flex-1 h-full">
                <TitleLabel title="Route" />
                <div className="w-full h-40 md:h-80 lg:w-52 lg:h-52 xl:w-80 xl:h-80 shadow-xl rounded-2xl">
                  <iframe
                    id="Map"
                    title="order-map"
                    frameBorder="0"
                    scrolling="no"
                    className="h-full w-full object-cover rounded-2xl"
                    src="https://maps.google.com/maps?hl=en&amp;q=Malet%20St,%20London%20WC1E%207HU,%20United%20Kingdom+(Your%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  >
                    <a href="https://www.gps.ie/">gps vehicle tracker</a>
                  </iframe>
                </div>
                <div className="flex items-center space-x-3 justify-center my-2">
                  {/* <StatusItem value="active" /> */}
                  {/* <Label title="Delivered On Time @11:00 PM" /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const TitleLabel = ({ title }: any) => {
  return (
    <Label
      title={title}
      regular
      light
      style={{ color: "#3F3D56" }}
      className="uppercase text-sm md:text-base"
    />
  );
};

export default OrderDetail;
