import salesData from "../../data/us-sales.js";

export default function handler(req, res) {
  res.status(200).json(salesData);
}
