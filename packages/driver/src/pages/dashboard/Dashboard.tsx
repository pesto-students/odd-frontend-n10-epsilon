import { DashboardTemplate, Icon, Switch } from "@odd/components";

const action = [
  { name: "Home", route: "/dashboard/home" },
  { name: "Trips & Payment", route: "/dashboard/trips-and-payments" },
  {
    name: (
      <div className="flex">
        <Icon iconName="icn-person-pin" size="24" className="mr-1" />
        <span>Profile</span>
      </div>
    ),
    route: "/dashboard/profile",
  },
];

const actionsLeft = [
  <div className="flex h-full justify-center">
    <Switch
      onChange={(value: boolean) => {
        console.log(`Status Changed ${value}`);
      }}
    />
  </div>,
];

function Dashboard() {
  return <DashboardTemplate action={action} actionLeft={actionsLeft} />;
}

export default Dashboard;
