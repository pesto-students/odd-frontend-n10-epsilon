import { DashboardTemplate } from "@odd/components";
import { MdPersonPin } from "react-icons/md";

const action = [
  { name: "Home", route: "/dashboard" },
  { name: "Order History", route: "/order-history" },
  {
    name: (
      <div className="flex">
        <MdPersonPin size="24" className="mr-1" />
        <span>Profile</span>
      </div>
    ),
    route: "/profile",
  },
];

export function Dashboard() {
  return <DashboardTemplate action={action} />;
}
