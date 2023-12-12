import { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";
// eslint-disable-next-line no-unused-vars
import { Chart as Chartjs } from "chart.js/auto";
import { originalData } from "./Data";

const EmploymentTypePieChart = () => {
  const dataFetched = originalData;
  const [data, setData] = useState({
    labels: ["FullTime", "PartTime", "DailyWage"],
    datasets: [
      {
        data: [0, 0, 0],
        backgroundColor: ["#FFCE56", "#FF6384", "#36A2EB"],
        hoverBackgroundColor: ["#FFCE56", "#FF6384", "#36A2EB"],
      },
    ],
  });

  useEffect(() => {
    const originalData = dataFetched;

    const countFullTime = originalData.filter(
      (item) => item["Employment Type"] === "FullTime"
    ).length;
    const countPartTime = originalData.filter(
      (item) => item["Employment Type"] === "PartTime"
    ).length;
    const countDailyWage = originalData.filter(
      (item) => item["Employment Type"] === "DailyWage"
    ).length;

    const totalUsers = countFullTime + countPartTime + countDailyWage;

    setData({
      labels: [
        `FullTime (${countFullTime})`,
        `PartTime (${countPartTime})`,
        `DailyWage (${countDailyWage})`,
        `Total Users (${totalUsers})`,
      ],
      datasets: [
        {
          data: [countFullTime, countPartTime, countDailyWage],
          backgroundColor: ["#FFCE56", "#FF6384", "#36A2EB"],
          hoverBackgroundColor: ["#FFCE56", "#FF6384", "#36A2EB"],
        },
      ],
    });
  }, []);

  return (
    <div>
      <h2>Employment Type Distribution</h2>
      <Pie data={data} />
    </div>
  );
};

export default EmploymentTypePieChart;
