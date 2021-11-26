import { Link } from "react-router-dom";
import { Icon, IconColorType, Label, Select } from "@odd/components";
import { OrderItem, StatisticsItem } from "./components";

interface IProps {}

const TripsAndPayments: React.FC<IProps> = (props: IProps & any) => {
  const order = {
    orderId: "1234-1235-2525",
    pickUpAddress: "B-11,Fasil Road, Khari Baoli, Old ...",
    dropOffAddress: "3941,Naya Bazar Road, Khari Baoli ...",
    pickDate: "10/02/20 ",
    amount: "140",
  };

  const orders = [
    order,
    order,
    order,
    order,
    order,
    order,
    order,
    order,
    order,
    order,
    order,
    order,
    order,
    order,
    order,
    order,
    order,
    order,
    order,
    order,
  ];

  return (
    <div className="relative m-auto md:w-7/12 xs:w-11/12 max-w-4xl">
      <div className="flex flex-row text-2xl font-semibold space-x-2">
        Trips &amp; Payment
      </div>
      <div className="rounded-2xl bg-white shadow-2xl py-6 px-16 mt-6">
        <div className="w-36 px-2 bg-opacity-20 rounded">
          <Select
            defaultOptions={["All Time", "Last 7 days"]}
            onSelectionChange={(value) => {
              console.log(value);
            }}
            outline={false}
            className="bg-primary rounded"
          />
        </div>
        <div className="grid grid-cols-2 justify-between">
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
          <div className="col-span-1 h-full my-auto">
            <div
              className="flex flex-row mt-6 justify-between space-x-4 px-4 py-4 border-2 rounded max-h-28"
              style={{
                color: "#00DEDE",
              }}
            >
              <StatisticsItem
                iconName="icn-trip-state-earn"
                label="Earned"
                value="570 Rs"
              />
              <StatisticsItem
                iconName="icn-trip-state-travel"
                label="Traveled"
                value="250Km"
              />
              <StatisticsItem
                iconName="icn-trip-state-trip"
                label="Trips"
                value="21"
              />
            </div>
          </div>
        </div>
        <div className="overflow-auto max-h-80 py-3 no-scrollbar">
          <div className="grid grid-cols-2 gap-4 ">
            {orders.map((_order) => {
              return (
                <Link to={`/dashboard/trips/${_order.orderId}`}>
                  <OrderItem
                    pickUpAddress={_order.pickUpAddress}
                    dropOffAddress={_order.dropOffAddress}
                    pickDate={_order.pickDate}
                    amount={_order.amount}
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripsAndPayments;
