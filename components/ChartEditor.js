import { Bar, Line, Pie } from "react-chartjs-2";
import { useEffect, useState } from "react";
import "chart.js/auto";
import formatDataSet from "../modules/formatDataSet";
import randomColor from "../modules/randomColor";

const ChartEditor = ({
  chartData,
  field,
  dimension,
  measure,
  title,
  type,
  id,
  setCharts,
  charts,
  saveCharts,
  setSaveCharts,
  setChartModalIsOpen,
  setSelectedChart,
}) => {
  const [selectedMeasure, setMeasure] = useState(measure);
  const [selectedDimension, setDimension] = useState(dimension);
  const [selectedField, setField] = useState(field);
  const [selectedTitle, setTitle] = useState(title);
  const [selectedType, setType] = useState(type);

  // Here I'm trying to automatically filter the dataset - it needs work..
  // The idea was to ensure a numerical value to ensure sum and mean aggregations can be performed
  const fields = Object.keys(chartData[0]);
  const numericalFields = [];
  const stringFields = [];

  fields.map((field) => {
    if (typeof chartData[0][field] === "number") {
      numericalFields.push(field);
      return;
    }
    stringFields.push(field);
    return;
  });

  useEffect(() => {
    // Deselects chart on unload
    return () => {
      setSelectedChart();
    };
  }, []);

  return (
    <div className="flex flex-col">
      <div>Settings</div>
      <form>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Title
          </label>
          <div className="mt-1">
            <input
              onChange={(e) => setTitle(e.target.value)}
              value={selectedTitle}
              type="text"
              name="title"
              id="title"
              className="block w-full rounded-md border-2 border-gray-300 py-2 pl-3 pr-10 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder=""
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="location"
            className="block text-sm font-medium text-gray-700"
          >
            Type
          </label>
          <select
            onChange={(e) => setType(e.target.value)}
            id="location"
            name="location"
            className="mt-1 block w-full rounded-md border-2 border-gray-300 border-solid py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            value={selectedType}
          >
            <option>Choose a type..</option>
            <option>pie</option>
            <option>bar</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="location"
            className="block text-sm font-medium text-gray-700"
          >
            Field
          </label>
          <select
            onChange={(e) => setField(e.target.value)}
            id="location"
            name="location"
            className="mt-1 block w-full rounded-md border-2 border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            value={selectedField}
          >
            <option>Choose a field..</option>
            {numericalFields.map((field) => (
              <option>{field}</option>
            ))}
          </select>
        </div>
        <div>
          <label
            htmlFor="location"
            className="block text-sm font-medium text-gray-700"
          >
            Dimension
          </label>
          <select
            onChange={(e) => setDimension(e.target.value)}
            id="location"
            name="location"
            className="mt-1 block w-full rounded-md border-2 border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            value={selectedDimension}
          >
            <option>Choose a dimension..</option>
            {stringFields.map((field) => (
              <option>{field}</option>
            ))}
          </select>
        </div>
        <div>
          <label
            htmlFor="location"
            className="block text-sm font-medium text-gray-700"
          >
            Measure
          </label>
          <select
            id="location"
            name="location"
            className="mt-1 block w-full rounded-md  border-2 border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            value={selectedMeasure}
            onChange={(e) => setMeasure(e.target.value)}
          >
            <option>Choose a measure..</option>
            <option>sum</option>
            <option>mean</option>
          </select>
        </div>
        <button
          type="button"
          className="mt-4 inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          onClick={() => {
            // If a chart is selected we identify from its index, and edit that one
            // Otherwise its a new chart and we add to the front of the array
            if (typeof id === "number") {
              setCharts(
                charts.map((chart, index) => {
                  if (index === id) {
                    return {
                      field: selectedField,
                      dimension: selectedDimension,
                      type: selectedType,
                      title: selectedTitle,
                      measure: selectedMeasure,
                    };
                  }
                  return chart;
                })
              );
            } else {
              const newChartSet = [
                {
                  field: selectedField,
                  dimension: selectedDimension,
                  type: selectedType,
                  title: selectedTitle,
                  measure: selectedMeasure,
                },
              ].concat(charts);
              setCharts(newChartSet);
            }
            setSaveCharts(!saveCharts);
            setChartModalIsOpen(false);
            setSelectedChart();
          }}
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default ChartEditor;
