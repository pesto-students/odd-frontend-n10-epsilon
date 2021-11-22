import React from "react";
import { Bar } from "react-chartjs-2";

interface IProps {
  dataArray?: Array<number>;
  monthsArray?: Array<string>;
  height?: number;
  width?: number;
  className?: string;
}

const BarChart: React.FC<IProps> = (props: IProps & any) => {
  const rand = () => Math.floor(Math.random() * 255);
  const genData = (dataArray: Array<number>, monthsArray?: Array<string>) => ({
    labels: monthsArray,
    datasets: [
      {
        type: "line",
        borderWidth: 2,
        fill: false,
        borderColor: "rgb(54, 162, 235)",
        data: dataArray,
      },
    ],
  });

  const options: any = {
    scales: {},
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const {
    dataArray = [rand(), rand(), rand(), rand(), rand(), rand()],
    monthsArray = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
    ],
    height = 366,
    width = 818,
  } = props;
  const data: any = genData(dataArray, monthsArray);
  return (
    <div
      // style={{
      //   height: height,
      //   width: width,
      // }}
      className={props.className}
    >
      <Bar data={data} height={height} width={width} options={options} />
    </div>
  );
};

export default BarChart;
