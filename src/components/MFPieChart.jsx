import { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";
// eslint-disable-next-line no-unused-vars
import { Chart as Chartjs } from "chart.js/auto";
import { originalData } from "./Data";

const GenderPieChart = () => {
  const dataFetched = originalData;
  const [data, setData] = useState({
    labels: ["Male", "Female"],
    datasets: [
      {
        data: [0, 0],
        backgroundColor: ["#36A2EB", "#FF6384"],
        hoverBackgroundColor: ["#36A2EB", "#FF6384"],
      },
    ],
  });

  useEffect(() => {
    const originalData = dataFetched;
    const filteredData = originalData.filter(
      (item) => item.gender === "Male" || item.gender === "Female"
    );

    const countMale = filteredData.filter(
      (item) => item.gender === "Male"
    ).length;
    const countFemale = filteredData.filter(
      (item) => item.gender === "Female"
    ).length;

    const totalUsers = countMale + countFemale;

    setData({
      labels: [
        `Male (${countMale})`,
        `Female (${countFemale})`,
        `Total Users (${totalUsers})`,
      ],
      datasets: [
        {
          data: [countMale, countFemale],
          backgroundColor: ["#36A2EB", "#FF6384"],
          hoverBackgroundColor: ["#36A2EB", "#FF6384"],
        },
      ],
    });
  }, []);

  return (
    <div>
      <h2>Gender Distribution</h2>
      <Pie data={data} />
    </div>
  );
};

export default GenderPieChart;
