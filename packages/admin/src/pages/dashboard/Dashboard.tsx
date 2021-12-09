import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FullScreenLoader, Label } from "@odd/components";
import {
  BarChart,
  ChartLabelItem,
  DoughnutChart,
  EarningItem,
  TotalItem,
} from "../../molecules";
import * as apiService from "../../api-call";
import { API } from "../../constant/Endpoints";
import { StatisticsReader } from "../../helpers";

const Dashboard: React.FC<any> = () => {
  const [loading, setLoading] = useState(true);
  const [statistics, setStatistics] = useState<any>(null);

  useEffect(() => {
    async function loadData() {
      const api = API.ADMIN_ENDPOINTS.STATISTICS;
      try {
        const result = await apiService.getApi(api);
        const data = result.data;
        console.log(data);
        setStatistics(data.data);
      } catch (error) {
        setStatistics(null);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  if (loading) {
    return <FullScreenLoader />;
  }

  return (
    <div>
      <div className="flex justify-between px-6 h-16 bg-white items-center">
        <div className="text-2xl font-bold">Hello</div>
        {/* <div className="bg-primary rounded py-1 bg-opacity-20 px-6">
          <Label title="All Time" secondary />
        </div> */}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-3 xl:gap-0 justify-between items-center mx-3 xl:mx-6 mt-4 xl:mt-8">
        <TotalItem
          icon="icn-total-users"
          label={"Total Users"}
          count={StatisticsReader.TotalUsers(statistics)}
          sinceValue={0}
        />
        <TotalItem
          icon="icn-total-drivers"
          label={"Total Drivers"}
          count={StatisticsReader.TotalDrivers(statistics)}
          sinceValue={0}
        />
        <TotalItem
          icon="icn-total-orders"
          label={"Total Orders"}
          count={StatisticsReader.TotalOrders(statistics)}
          sinceValue={0}
        />
        {/* <DateRangeSelectionItems /> */}
      </div>
      <div className="grid grid-flow-row lg:grid-flow-col grid-cols-1 lg:grid-cols-6 xl:grid-cols-10 justify-center mx-3 xl:mx-6 mt-4 xl:mt-8 h-auto xl:h-96 bg-white shadow-lg rounded">
        <div className="flex col-span-1 flex-col xl:flex-row lg:col-span-3 xl:col-span-3 p-7">
          <Label
            title="Earnings"
            // style={{ fontSize: 16 }}
            medium
            className="uppercase text-xs lg:text-base"
          />
          <div className="lg:flex-auto mt-4 xl:mt-20 px-4">
            <div className="flex">
              <EarningItem
                count={StatisticsReader.TotalEarningsValue(statistics)}
                sinceValue={StatisticsReader.TotalEarningsChange(statistics)}
              />
            </div>
            <div className="flex items-center mt-9">
              <Link
                to="/dashboard/order"
                className="flex mx-auto items-center justify-center w-full h-9 xl:h-12 ring-gray ring-2 rounded "
              >
                <Label title="Open Orders" className="text-gray" />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex col-span-1 lg:col-span-3 xl:col-span-7 justify-end my-auto">
          <BarChart className="w-full xl:w-3/4 lg:mr-12 h-1/4 lg:h-4/5" />
        </div>
      </div>
      <div className="grid grid-flow-row lg:grid-flow-col grid-cols-1 lg:grid-cols-6 xl:grid-cols-10 justify-center mx-3 xl:mx-6 mt-4 xl:mt-8 h-auto lg:h-96 bg-white shadow-lg rounded">
        <div className="col-span-1 lg:col-span-3 xl:col-span-3 p-7">
          <Label
            title="Deliveries"
            // style={{ fontSize: 16 }}
            medium
            className="uppercase text-xs lg:text-base"
          />
          <div className="flex flex-col mt-4 lg:mt-8 justify-between gap-2 lg:gap-4 xl:gap-8">
            <ChartLabelItem
              label="In progress"
              value={StatisticsReader.GetChartValue(statistics, "inProgress")}
              color="rgba(54, 162, 235, 1)"
            />
            <ChartLabelItem
              label="On Time"
              value={StatisticsReader.GetChartValue(statistics, "onTime")}
              color="rgba(75, 192, 192, 1)"
            />

            <ChartLabelItem
              label="Delayed"
              value={StatisticsReader.GetChartValue(statistics, "delayed")}
              color="rgba(255, 205, 86, 1)"
            />

            <ChartLabelItem
              label="Failed"
              value={StatisticsReader.GetChartValue(statistics, "failed")}
              color="rgba(255, 99, 132, 1)"
            />
          </div>
        </div>
        <div className="flex col-span-1 lg:col-span-3 xl:col-span-7 justify-center xl:justify-end my-auto">
          <DoughnutChart
            className="w-10/12 xl:w-80 lg:mr-12 h-1/4 lg:h-4/5 p-4"
            inProgress={StatisticsReader.GetChartValue(
              statistics,
              "inProgress"
            )}
            onTime={StatisticsReader.GetChartValue(statistics, "onTime")}
            delayed={StatisticsReader.GetChartValue(statistics, "delayed")}
            failed={StatisticsReader.GetChartValue(statistics, "failed")}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
