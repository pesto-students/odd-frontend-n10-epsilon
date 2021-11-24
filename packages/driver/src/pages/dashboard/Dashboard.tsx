import { DashboardTemplate, Icon } from "@odd/components";

const action = [
  { name: "Home", route: "/dashboard/home" },
  { name: "Order History", route: "/dashboard/order-history" },
  {
    name: (
      <div className="flex">
        <Icon iconName="icn-person-pin" size="24" className="mr-1" />
        <span>Profile</span>
      </div>
    ),
    route: "/profile",
  },
];

function Dashboard() {
  return <DashboardTemplate action={action} />;
}

export default Dashboard;
