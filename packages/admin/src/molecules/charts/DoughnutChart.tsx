import React from "react";
import { Doughnut } from "react-chartjs-2";

interface IProps {
  inProgress?: number;
  onTime?: number;
  delayed?: number;
  failed?: number;
  width?: number;
  height?: number;
  className?: string;
}

const DoughnutChart: React.FC<IProps> = (props: IProps & any) => {
  const {
    inProgress = 35,
    onTime = 16,
    delayed = 45,
    failed = 4,
    width = 361,
    height = 340,
    className = "",
  } = props;

  const data = {
    labels: ["In Progress", "On Time", "Delayed", "Failed"],
    datasets: [
      {
        data: [inProgress, onTime, delayed, failed],
        backgroundColor: [
          "rgba(54, 162, 235, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(255, 205, 86, 1)",
          "rgba(255, 99, 132, 1)",
        ],
        borderColor: ["rgba(255, 255, 255, 1)"],
        borderWidth: 2,
      },
    ],
  };

  const options: any = {
    scales: {},
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div
      // style={{
      //   height: height,
      //   width: width,
      // }}
      className={className}
    >
      <Doughnut data={data} height={height} width={width} options={options} />
    </div>
  );
};

export default DoughnutChart;
