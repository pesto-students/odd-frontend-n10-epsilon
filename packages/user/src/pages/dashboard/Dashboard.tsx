import { DashboardTemplate, Icon } from "@odd/components";

const action = [
  { name: "Home", route: "/dashboard" },
  { name: "Order History", route: "/order-history" },
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

export function Dashboard() {
  return <DashboardTemplate action={action} />;
}
