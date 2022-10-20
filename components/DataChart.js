import { Bar, Line, Pie } from "react-chartjs-2";
import "chart.js/auto";
import formatDataSet from "../modules/formatDataSet";
import randomColor from "../modules/randomColor";

const DataChart = ({ chartData, field, dimension, measure, title, type }) => {
  const formattedDataSet = formatDataSet({
    data: chartData,
    field,
    dimension,
    measure,
  });
  const data = {
    labels: formattedDataSet.labels,
    // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
    datasets: [
      {
        data: formattedDataSet.summedSets,
        // you can set indiviual colors for each bar
        backgroundColor: formattedDataSet.labels.map((l) => randomColor()),
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: false,
      },
      legend: {
        display: false,
        position: "bottom",
      },
    },
  };

  const getChartType = () => {
    if (type === "bar") {
      return <Bar data={data} options={options} />;
    }
    if (type === "line") {
      return <Line data={data} options={options} />;
    }
    if (type === "pie") {
      return <Pie data={data} options={options} />;
    }
    return <Bar data={data} options={options} />;
  };

  return getChartType();
};

export default DataChart;
