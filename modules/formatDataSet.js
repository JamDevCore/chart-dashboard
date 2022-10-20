import _, { size } from "lodash";

const formatDataSet = ({ data, field, dimension, measure }) => {
  // Applys the measure (only two -> sum / medium)
  const groupedData = _.groupBy(data, dimension);
  const labels = Object.keys(groupedData);
  const summedSets = labels.map((label) => {
    if (measure === "sum")
      return _.sumBy(groupedData[label], function (o) {
        return o[field];
      });
    return _.meanBy(groupedData[label], function (o) {
      return o[field];
    });
  });
  return { labels, summedSets };
};
export default formatDataSet;
