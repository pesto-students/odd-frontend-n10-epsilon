import { Label } from "@odd/components";
import { Link } from "react-router-dom";
import {
  BarChart,
  ChartLabelItem,
  DateRangeSelectionItems,
  DoughnutChart,
  EarningItem,
  TotalItem,
} from "../../molecules";

function Dashboard() {
  return (
    <div>
      <div className="flex justify-between px-6 h-16 bg-white items-center">
        <div className=" text-2xl font-bold">Hello Michael</div>
        <div className=" bg-primary rounded py-1 bg-opacity-20 px-6">
          <Label title="All Time" secondary />
        </div>
      </div>
      <div className="flex justify-between mx-6 mt-8">
        <TotalItem
          icon="icn-total-users"
          label={"Total Users"}
          count={96}
          sinceValue={1.88}
        />
        <TotalItem
          icon="icn-total-drivers"
          label={"Total Drivers"}
          count={21}
          sinceValue={2.01}
        />
        <TotalItem
          icon="icn-total-orders"
          label={"Total Orders"}
          count={176}
          sinceValue={8.65}
        />
        <DateRangeSelectionItems />
      </div>
      <div className=" grid grid-flow-col grid-cols-10 justify-center mx-6 mt-8 h-96 bg-white shadow-lg  rounded">
        <div className="col-span-3 p-7">
          <Label
            title="Earnings"
            style={{ fontSize: 16 }}
            medium
            className="uppercase"
          />
          <div className="flex-auto mt-20 px-4">
            <div className="flex">
              <EarningItem count={68631} sinceValue={25.64} />
            </div>
            <div className="flex items-center mt-9">
              <Link
                to="/dashboard/order"
                className="flex mx-auto items-center justify-center w-full h-12 ring-gray ring-2 rounded "
              >
                <Label title="Open Orders" className="text-gray" />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex col-span-7 justify-end my-auto">
          <BarChart className="mr-12 h-4/5" />
        </div>
      </div>
      <div className=" grid grid-flow-col grid-cols-10 justify-center mx-6 mt-8 h-96 bg-white shadow-lg rounded">
        <div className="col-span-3 p-7">
          <Label
            title="Deliveries"
            style={{ fontSize: 16 }}
            medium
            className="uppercase"
          />
          <div className="flex flex-col mt-8 justify-between gap-8">
            <ChartLabelItem
              label="In progress"
              value={35}
              color="rgba(54, 162, 235, 1)"
            />
            <ChartLabelItem
              label="On Time"
              value={16}
              color="rgba(75, 192, 192, 1)"
            />

            <ChartLabelItem
              label="Delayed"
              value={45}
              color="rgba(255, 205, 86, 1)"
            />

            <ChartLabelItem
              label="Failed"
              value={4}
              color="rgba(255, 99, 132, 1)"
            />
          </div>
        </div>
        <div className="flex col-span-7 justify-end my-auto">
          <DoughnutChart className="mr-12 w-80" />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
