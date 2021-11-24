import { IconColorType, Label, LabeledIcon } from "@odd/components";
import { useEffect, useState } from "react";
import { LiveOrderItem, OrderItem } from "../../molecules/order-items";

interface IProps {}

enum ITabType {
  live,
  completed,
}

const getStatusType = (status: string) => {
  if (status == "completed") {
    return ITabType.completed;
  }
  return ITabType.live;
};

interface IOrder {
  orderId: string;
  pickUpAddress: string;
  dropOffAddress: string;
  driverName: string;
  driverPhone: string;
  pickDate: string;
  pickTime: string;
  amount: string;
  status: string;
  vehicleName: string;
  vehicleImage: string;
}

const defaultOrders: Array<IOrder> = [
  {
    orderId: "123-46-456",
    pickUpAddress: "Mahatma Gandhi Road, New Palasia....",
    dropOffAddress: "Mahatma Gandhi Road, New Palasia....",
    driverName: "Nairitya Chourey",
    driverPhone: "9988776655",
    pickDate: "10/02/2020",
    pickTime: "09:30 AM",
    amount: "140",
    vehicleImage: "",
    vehicleName: "Bike",
    status: "live",
  },
  {
    orderId: "123-46-456",
    pickUpAddress: "Mahatma Gandhi Road, New Palasia....",
    dropOffAddress: "Mahatma Gandhi Road, New Palasia....",
    driverName: "Nairitya Chourey",
    driverPhone: "9988776655",
    pickDate: "10/02/2020",
    pickTime: "09:30 AM",
    amount: "140",
    status: "completed",
    vehicleImage: "",
    vehicleName: "Bike",
  },
  {
    orderId: "123-46-456",
    pickUpAddress: "Mahatma Gandhi Road, New Palasia....",
    dropOffAddress: "Mahatma Gandhi Road, New Palasia....",
    driverName: "Nairitya Chourey",
    driverPhone: "9988776655",
    pickDate: "10/02/2020",
    pickTime: "09:30 AM",
    amount: "140",
    vehicleImage: "",
    vehicleName: "Bike",
    status: "live",
  },
  {
    orderId: "123-46-456",
    pickUpAddress: "Mahatma Gandhi Road, New Palasia....",
    dropOffAddress: "Mahatma Gandhi Road, New Palasia....",
    driverName: "Nairitya Chourey",
    driverPhone: "9988776655",
    pickDate: "10/02/2020",
    pickTime: "09:30 AM",
    amount: "140",
    status: "completed",
    vehicleImage: "",
    vehicleName: "Bike",
  },
  {
    orderId: "123-46-456",
    pickUpAddress: "Mahatma Gandhi Road, New Palasia....",
    dropOffAddress: "Mahatma Gandhi Road, New Palasia....",
    driverName: "Nairitya Chourey",
    driverPhone: "9988776655",
    pickDate: "10/02/2020",
    pickTime: "09:30 AM",
    amount: "140",
    vehicleImage: "",
    vehicleName: "Bike",
    status: "live",
  },
  {
    orderId: "123-46-456",
    pickUpAddress: "Mahatma Gandhi Road, New Palasia....",
    dropOffAddress: "Mahatma Gandhi Road, New Palasia....",
    driverName: "Nairitya Chourey",
    driverPhone: "9988776655",
    pickDate: "10/02/2020",
    pickTime: "09:30 AM",
    amount: "140",
    status: "completed",
    vehicleImage: "",
    vehicleName: "Bike",
  },
  {
    orderId: "123-46-456",
    pickUpAddress: "Mahatma Gandhi Road, New Palasia....",
    dropOffAddress: "Mahatma Gandhi Road, New Palasia....",
    driverName: "Nairitya Chourey",
    driverPhone: "9988776655",
    pickDate: "10/02/2020",
    pickTime: "09:30 AM",
    amount: "140",
    vehicleImage: "",
    vehicleName: "Bike",
    status: "live",
  },
  {
    orderId: "123-46-456",
    pickUpAddress: "Mahatma Gandhi Road, New Palasia....",
    dropOffAddress: "Mahatma Gandhi Road, New Palasia....",
    driverName: "Nairitya Chourey",
    driverPhone: "9988776655",
    pickDate: "10/02/2020",
    pickTime: "09:30 AM",
    amount: "140",
    status: "completed",
    vehicleImage: "",
    vehicleName: "Bike",
  },
  {
    orderId: "123-46-456",
    pickUpAddress: "Mahatma Gandhi Road, New Palasia....",
    dropOffAddress: "Mahatma Gandhi Road, New Palasia....",
    driverName: "Nairitya Chourey",
    driverPhone: "9988776655",
    pickDate: "10/02/2020",
    pickTime: "09:30 AM",
    amount: "140",
    vehicleImage: "",
    vehicleName: "Bike",
    status: "live",
  },
  {
    orderId: "123-46-456",
    pickUpAddress: "Mahatma Gandhi Road, New Palasia....",
    dropOffAddress: "Mahatma Gandhi Road, New Palasia....",
    driverName: "Nairitya Chourey",
    driverPhone: "9988776655",
    pickDate: "10/02/2020",
    pickTime: "09:30 AM",
    amount: "140",
    status: "completed",
    vehicleImage: "",
    vehicleName: "Bike",
  },
  {
    orderId: "123-46-456",
    pickUpAddress: "Mahatma Gandhi Road, New Palasia....",
    dropOffAddress: "Mahatma Gandhi Road, New Palasia....",
    driverName: "Nairitya Chourey",
    driverPhone: "9988776655",
    pickDate: "10/02/2020",
    pickTime: "09:30 AM",
    amount: "140",
    vehicleImage: "",
    vehicleName: "Bike",
    status: "live",
  },
  {
    orderId: "123-46-456",
    pickUpAddress: "Mahatma Gandhi Road, New Palasia....",
    dropOffAddress: "Mahatma Gandhi Road, New Palasia....",
    driverName: "Nairitya Chourey",
    driverPhone: "9988776655",
    pickDate: "10/02/2020",
    pickTime: "09:30 AM",
    amount: "140",
    status: "completed",
    vehicleImage: "",
    vehicleName: "Bike",
  },
  {
    orderId: "123-46-456",
    pickUpAddress: "Mahatma Gandhi Road, New Palasia....",
    dropOffAddress: "Mahatma Gandhi Road, New Palasia....",
    driverName: "Nairitya Chourey",
    driverPhone: "9988776655",
    pickDate: "10/02/2020",
    pickTime: "09:30 AM",
    amount: "140",
    vehicleImage: "",
    vehicleName: "Bike",
    status: "live",
  },
  {
    orderId: "123-46-456",
    pickUpAddress: "Mahatma Gandhi Road, New Palasia....",
    dropOffAddress: "Mahatma Gandhi Road, New Palasia....",
    driverName: "Nairitya Chourey",
    driverPhone: "9988776655",
    pickDate: "10/02/2020",
    pickTime: "09:30 AM",
    amount: "140",
    status: "completed",
    vehicleImage: "",
    vehicleName: "Bike",
  },
  {
    orderId: "123-46-456",
    pickUpAddress: "Mahatma Gandhi Road, New Palasia....",
    dropOffAddress: "Mahatma Gandhi Road, New Palasia....",
    driverName: "Nairitya Chourey",
    driverPhone: "9988776655",
    pickDate: "10/02/2020",
    pickTime: "09:30 AM",
    amount: "140",
    vehicleImage: "",
    vehicleName: "Bike",
    status: "live",
  },
  {
    orderId: "123-46-456",
    pickUpAddress: "Mahatma Gandhi Road, New Palasia....",
    dropOffAddress: "Mahatma Gandhi Road, New Palasia....",
    driverName: "Nairitya Chourey",
    driverPhone: "9988776655",
    pickDate: "10/02/2020",
    pickTime: "09:30 AM",
    amount: "140",
    status: "completed",
    vehicleImage: "",
    vehicleName: "Bike",
  },
  {
    orderId: "123-46-456",
    pickUpAddress: "Mahatma Gandhi Road, New Palasia....",
    dropOffAddress: "Mahatma Gandhi Road, New Palasia....",
    driverName: "Nairitya Chourey",
    driverPhone: "9988776655",
    pickDate: "10/02/2020",
    pickTime: "09:30 AM",
    amount: "140",
    vehicleImage: "",
    vehicleName: "Bike",
    status: "live",
  },
  {
    orderId: "123-46-456",
    pickUpAddress: "Mahatma Gandhi Road, New Palasia....",
    dropOffAddress: "Mahatma Gandhi Road, New Palasia....",
    driverName: "Nairitya Chourey",
    driverPhone: "9988776655",
    pickDate: "10/02/2020",
    pickTime: "09:30 AM",
    amount: "140",
    status: "completed",
    vehicleImage: "",
    vehicleName: "Bike",
  },
  {
    orderId: "123-46-456",
    pickUpAddress: "Mahatma Gandhi Road, New Palasia....",
    dropOffAddress: "Mahatma Gandhi Road, New Palasia....",
    driverName: "Nairitya Chourey",
    driverPhone: "9988776655",
    pickDate: "10/02/2020",
    pickTime: "09:30 AM",
    amount: "140",
    vehicleImage: "",
    vehicleName: "Bike",
    status: "live",
  },
  {
    orderId: "123-46-456",
    pickUpAddress: "Mahatma Gandhi Road, New Palasia....",
    dropOffAddress: "Mahatma Gandhi Road, New Palasia....",
    driverName: "Nairitya Chourey",
    driverPhone: "9988776655",
    pickDate: "10/02/2020",
    pickTime: "09:30 AM",
    amount: "140",
    status: "completed",
    vehicleImage: "",
    vehicleName: "Bike",
  },
  {
    orderId: "123-46-456",
    pickUpAddress: "Mahatma Gandhi Road, New Palasia....",
    dropOffAddress: "Mahatma Gandhi Road, New Palasia....",
    driverName: "Nairitya Chourey",
    driverPhone: "9988776655",
    pickDate: "10/02/2020",
    pickTime: "09:30 AM",
    amount: "140",
    vehicleImage: "",
    vehicleName: "Bike",
    status: "live",
  },
  {
    orderId: "123-46-456",
    pickUpAddress: "Mahatma Gandhi Road, New Palasia....",
    dropOffAddress: "Mahatma Gandhi Road, New Palasia....",
    driverName: "Nairitya Chourey",
    driverPhone: "9988776655",
    pickDate: "10/02/2020",
    pickTime: "09:30 AM",
    amount: "140",
    status: "completed",
    vehicleImage: "",
    vehicleName: "Bike",
  },
  {
    orderId: "123-46-456",
    pickUpAddress: "Mahatma Gandhi Road, New Palasia....",
    dropOffAddress: "Mahatma Gandhi Road, New Palasia....",
    driverName: "Nairitya Chourey",
    driverPhone: "9988776655",
    pickDate: "10/02/2020",
    pickTime: "09:30 AM",
    amount: "140",
    vehicleImage: "",
    vehicleName: "Bike",
    status: "live",
  },
  {
    orderId: "123-46-456",
    pickUpAddress: "Mahatma Gandhi Road, New Palasia....",
    dropOffAddress: "Mahatma Gandhi Road, New Palasia....",
    driverName: "Nairitya Chourey",
    driverPhone: "9988776655",
    pickDate: "10/02/2020",
    pickTime: "09:30 AM",
    amount: "140",
    status: "completed",
    vehicleImage: "",
    vehicleName: "Bike",
  },
  {
    orderId: "123-46-456",
    pickUpAddress: "Mahatma Gandhi Road, New Palasia....",
    dropOffAddress: "Mahatma Gandhi Road, New Palasia....",
    driverName: "Nairitya Chourey",
    driverPhone: "9988776655",
    pickDate: "10/02/2020",
    pickTime: "09:30 AM",
    amount: "140",
    vehicleImage: "",
    vehicleName: "Bike",
    status: "live",
  },
  {
    orderId: "123-46-456",
    pickUpAddress: "Mahatma Gandhi Road, New Palasia....",
    dropOffAddress: "Mahatma Gandhi Road, New Palasia....",
    driverName: "Nairitya Chourey",
    driverPhone: "9988776655",
    pickDate: "10/02/2020",
    pickTime: "09:30 AM",
    amount: "140",
    status: "completed",
    vehicleImage: "",
    vehicleName: "Bike",
  },
  {
    orderId: "123-46-456",
    pickUpAddress: "Mahatma Gandhi Road, New Palasia....",
    dropOffAddress: "Mahatma Gandhi Road, New Palasia....",
    driverName: "Nairitya Chourey",
    driverPhone: "9988776655",
    pickDate: "10/02/2020",
    pickTime: "09:30 AM",
    amount: "140",
    vehicleImage: "",
    vehicleName: "Bike",
    status: "live",
  },
  {
    orderId: "123-46-456",
    pickUpAddress: "Mahatma Gandhi Road, New Palasia....",
    dropOffAddress: "Mahatma Gandhi Road, New Palasia....",
    driverName: "Nairitya Chourey",
    driverPhone: "9988776655",
    pickDate: "10/02/2020",
    pickTime: "09:30 AM",
    amount: "140",
    status: "completed",
    vehicleImage: "",
    vehicleName: "Bike",
  },
  {
    orderId: "123-46-456",
    pickUpAddress: "Mahatma Gandhi Road, New Palasia....",
    dropOffAddress: "Mahatma Gandhi Road, New Palasia....",
    driverName: "Nairitya Chourey",
    driverPhone: "9988776655",
    pickDate: "10/02/2020",
    pickTime: "09:30 AM",
    amount: "140",
    vehicleImage: "",
    vehicleName: "Bike",
    status: "live",
  },
  {
    orderId: "123-46-456",
    pickUpAddress: "Mahatma Gandhi Road, New Palasia....",
    dropOffAddress: "Mahatma Gandhi Road, New Palasia....",
    driverName: "Nairitya Chourey",
    driverPhone: "9988776655",
    pickDate: "10/02/2020",
    pickTime: "09:30 AM",
    amount: "140",
    status: "completed",
    vehicleImage: "",
    vehicleName: "Bike",
  },
  {
    orderId: "123-46-456",
    pickUpAddress: "Mahatma Gandhi Road, New Palasia....",
    dropOffAddress: "Mahatma Gandhi Road, New Palasia....",
    driverName: "Nairitya Chourey",
    driverPhone: "9988776655",
    pickDate: "10/02/2020",
    pickTime: "09:30 AM",
    amount: "140",
    vehicleImage: "",
    vehicleName: "Bike",
    status: "live",
  },
  {
    orderId: "123-46-456",
    pickUpAddress: "Mahatma Gandhi Road, New Palasia....",
    dropOffAddress: "Mahatma Gandhi Road, New Palasia....",
    driverName: "Nairitya Chourey",
    driverPhone: "9988776655",
    pickDate: "10/02/2020",
    pickTime: "09:30 AM",
    amount: "140",
    status: "completed",
    vehicleImage: "",
    vehicleName: "Bike",
  },
  {
    orderId: "123-46-456",
    pickUpAddress: "Mahatma Gandhi Road, New Palasia....",
    dropOffAddress: "Mahatma Gandhi Road, New Palasia....",
    driverName: "Nairitya Chourey",
    driverPhone: "9988776655",
    pickDate: "10/02/2020",
    pickTime: "09:30 AM",
    amount: "140",
    vehicleImage: "",
    vehicleName: "Bike",
    status: "live",
  },
  {
    orderId: "123-46-456",
    pickUpAddress: "Mahatma Gandhi Road, New Palasia....",
    dropOffAddress: "Mahatma Gandhi Road, New Palasia....",
    driverName: "Nairitya Chourey",
    driverPhone: "9988776655",
    pickDate: "10/02/2020",
    pickTime: "09:30 AM",
    amount: "140",
    status: "completed",
    vehicleImage: "",
    vehicleName: "Bike",
  },
  {
    orderId: "123-46-456",
    pickUpAddress: "Mahatma Gandhi Road, New Palasia....",
    dropOffAddress: "Mahatma Gandhi Road, New Palasia....",
    driverName: "Nairitya Chourey",
    driverPhone: "9988776655",
    pickDate: "10/02/2020",
    pickTime: "09:30 AM",
    amount: "140",
    vehicleImage: "",
    vehicleName: "Bike",
    status: "live",
  },
  {
    orderId: "123-46-456",
    pickUpAddress: "Mahatma Gandhi Road, New Palasia....",
    dropOffAddress: "Mahatma Gandhi Road, New Palasia....",
    driverName: "Nairitya Chourey",
    driverPhone: "9988776655",
    pickDate: "10/02/2020",
    pickTime: "09:30 AM",
    amount: "140",
    status: "completed",
    vehicleImage: "",
    vehicleName: "Bike",
  },
  {
    orderId: "123-46-456",
    pickUpAddress: "Mahatma Gandhi Road, New Palasia....",
    dropOffAddress: "Mahatma Gandhi Road, New Palasia....",
    driverName: "Nairitya Chourey",
    driverPhone: "9988776655",
    pickDate: "10/02/2020",
    pickTime: "09:30 AM",
    amount: "140",
    vehicleImage: "",
    vehicleName: "Bike",
    status: "live",
  },
  {
    orderId: "123-46-456",
    pickUpAddress: "Mahatma Gandhi Road, New Palasia....",
    dropOffAddress: "Mahatma Gandhi Road, New Palasia....",
    driverName: "Nairitya Chourey",
    driverPhone: "9988776655",
    pickDate: "10/02/2020",
    pickTime: "09:30 AM",
    amount: "140",
    status: "completed",
    vehicleImage: "",
    vehicleName: "Bike",
  },
  {
    orderId: "123-46-456",
    pickUpAddress: "Mahatma Gandhi Road, New Palasia....",
    dropOffAddress: "Mahatma Gandhi Road, New Palasia....",
    driverName: "Nairitya Chourey",
    driverPhone: "9988776655",
    pickDate: "10/02/2020",
    pickTime: "09:30 AM",
    amount: "140",
    vehicleImage: "",
    vehicleName: "Bike",
    status: "live",
  },
  {
    orderId: "123-46-456",
    pickUpAddress: "Mahatma Gandhi Road, New Palasia....",
    dropOffAddress: "Mahatma Gandhi Road, New Palasia....",
    driverName: "Nairitya Chourey",
    driverPhone: "9988776655",
    pickDate: "10/02/2020",
    pickTime: "09:30 AM",
    amount: "140",
    status: "completed",
    vehicleImage: "",
    vehicleName: "Bike",
  },
  {
    orderId: "123-46-456",
    pickUpAddress: "Mahatma Gandhi Road, New Palasia....",
    dropOffAddress: "Mahatma Gandhi Road, New Palasia....",
    driverName: "Nairitya Chourey",
    driverPhone: "9988776655",
    pickDate: "10/02/2020",
    pickTime: "09:30 AM",
    amount: "140",
    vehicleImage: "",
    vehicleName: "Bike",
    status: "live",
  },
  {
    orderId: "123-46-456",
    pickUpAddress: "Mahatma Gandhi Road, New Palasia....",
    dropOffAddress: "Mahatma Gandhi Road, New Palasia....",
    driverName: "Nairitya Chourey",
    driverPhone: "9988776655",
    pickDate: "10/02/2020",
    pickTime: "09:30 AM",
    amount: "140",
    status: "completed",
    vehicleImage: "",
    vehicleName: "Bike",
  },
  {
    orderId: "123-46-456",
    pickUpAddress: "Mahatma Gandhi Road, New Palasia....",
    dropOffAddress: "Mahatma Gandhi Road, New Palasia....",
    driverName: "Nairitya Chourey",
    driverPhone: "9988776655",
    pickDate: "10/02/2020",
    pickTime: "09:30 AM",
    amount: "140",
    vehicleImage: "",
    vehicleName: "Bike",
    status: "live",
  },
  {
    orderId: "123-46-456",
    pickUpAddress: "Mahatma Gandhi Road, New Palasia....",
    dropOffAddress: "Mahatma Gandhi Road, New Palasia....",
    driverName: "Nairitya Chourey",
    driverPhone: "9988776655",
    pickDate: "10/02/2020",
    pickTime: "09:30 AM",
    amount: "140",
    status: "completed",
    vehicleImage: "",
    vehicleName: "Bike",
  },
  {
    orderId: "123-46-456",
    pickUpAddress: "Mahatma Gandhi Road, New Palasia....",
    dropOffAddress: "Mahatma Gandhi Road, New Palasia....",
    driverName: "Nairitya Chourey",
    driverPhone: "9988776655",
    pickDate: "10/02/2020",
    pickTime: "09:30 AM",
    amount: "140",
    vehicleImage: "",
    vehicleName: "Bike",
    status: "live",
  },
  {
    orderId: "123-46-456",
    pickUpAddress: "Mahatma Gandhi Road, New Palasia....",
    dropOffAddress: "Mahatma Gandhi Road, New Palasia....",
    driverName: "Nairitya Chourey",
    driverPhone: "9988776655",
    pickDate: "10/02/2020",
    pickTime: "09:30 AM",
    amount: "140",
    status: "completed",
    vehicleImage: "",
    vehicleName: "Bike",
  },
];

const OrderHistory: React.FC<IProps> = () => {
  const [tab, setTab] = useState(ITabType.live);
  const [orders, setOrders] = useState([...defaultOrders]);

  useEffect(() => {
    console.log("tab changed");
  }, [tab]);

  return (
    <div className="h-full py-5 items-center justify-center">
      <div className="flex flex-col mt-16 space-y-4 ml-11">
        <LabeledIcon
          title="Order History"
          iconName="icn-order-history"
          iconColorType={IconColorType.primary}
        />
        <div className="flex space-x-3 text-center my-auto h-8 ">
          <Tab
            isActive={tab === ITabType.live}
            label="Live Orders"
            onClick={() => {
              setTab(ITabType.live);
            }}
          />
          <Tab
            isActive={tab === ITabType.completed}
            label="Completed Orders"
            onClick={() => {
              setTab(ITabType.completed);
            }}
          />
        </div>
      </div>
      <div className="flex flex-wrap items-center py-6 w-full justify-items-stretch gap-2 md:gap-4 content-center pl-11">
        {orders && orders.length <= 0 ? (
          <div className="mx-auto w-full flex">
            <Label title="No order History" />
          </div>
        ) : (
          orders
            .filter((x: IOrder) => getStatusType(x.status) == tab)
            .map((order: IOrder) => {
              if (tab == ITabType.live) {
                return (
                  <LiveOrderItem
                    orderId={order.orderId}
                    pickUpAddress={order.pickUpAddress}
                    dropOffAddress={order.dropOffAddress}
                    pickTime={`${order.pickDate} at ${order.pickTime}`}
                    driverName={order.driverName}
                    driverPhone={order.driverPhone}
                    vehicleImage={""}
                    vehicleName={order.vehicleName}
                    amount={order.amount}
                  />
                );
              }

              return (
                <OrderItem
                  orderId={order.orderId}
                  pickUpAddress={order.pickUpAddress}
                  dropOffAddress={order.dropOffAddress}
                  pickTime={order.pickTime}
                  pickDate={order.pickDate}
                  driverName={order.driverName}
                  driverPhone={order.driverPhone}
                  amount={order.amount}
                />
              );
            })
        )}
      </div>
    </div>
  );
};

const Tab = ({ isActive, label, onClick }: any) => {
  return (
    <div
      className={`cursor-pointer rounded px-4  my-auto items-center justify-center text-center text-base z-10 ${
        isActive ? " bg-primary text-white " : "  bg-white text-black "
      }`}
      onClick={onClick}
    >
      {label}
    </div>
  );
};

export default OrderHistory;
