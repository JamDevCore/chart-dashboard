import { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  UsersIcon,
  XMarkIcon,
  PaintBrushIcon,
  PencilIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";
import usSalesData from "../data/us-sales";
import DataChart from "../components/DataChart";
import lodash from "lodash";
import Modal from "../components/Modal";
import ChartEditor from "../components/ChartEditor";


const navigation = [
  { name: "Edit charts", href: "#", icon: HomeIcon, current: true },
  { name: "Design & branding", href: "#", icon: UsersIcon, current: false },
  { name: "Preview", href: "#", icon: FolderIcon, current: false },
  { name: "Share setting", href: "#", icon: CalendarIcon, current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Dashboard({ usSalesData }) {
  const [charts, setCharts] = useState([]);
  const [publicQueryString, setPublicQueryString] = useState();

  const setDefaultCharts = () => {
    setCharts([
      {
        type: "bar",
        dimension: "region",
        field: "price",
        measure: "sum",
        title: "Total USD Spend Per Region",
      },
      {
        type: "bar",
        dimension: "category",
        field: "qty_ordered",
        measure: "mean",
        title: "Average quantity per category",
      },
      {
        type: "pie",
        dimension: "state",
        field: "value",
        measure: "mean",
        title: "Average value per state",
      },
    ]);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const queryString = document.location.search;
      if (!queryString) {
        // Also check local storage for browser saved charts
        setDefaultCharts();
      } else {
        // parse query string and set charts
        setPublicQueryString(queryString);
        let decodedQueryString = decodeURIComponent(queryString).slice(1, queryString.length -1);
        const charts = JSON.parse(decodedQueryString.replace('=', '').replace('?', ''));
        setCharts(charts);
      }
    }
  }, []);

  return (
    <>
      <div>
        {/* Static sidebar for desktop */}

        <div className="flex flex-1 flex-col ">
          <main className="flex-1">
            <div className="py-6 mx-auto">
              <div className="mx-auto mw-full px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-semibold text-gray-900 px-4">
                  Dashboard
                </h1>
                <a
                  className=" p-4 mx-auto underline text-blue-600 block"
                  href={`/${publicQueryString}`}
                >
                  Admin Dashboard
                </a>
              </div>
              <div className="mx-auto w-full px-4 sm:px-6 md:px-8">
                {/* Replace with your content */}
                <div className="py-4 flex flex-col lg:flex-row lg:flex-wrap">
                  {charts.map((chart, index) => (
                    <div
                      key={index}
                      style={{ minWidth: "45%" }}
                      className={`p-6 h-auto relative rounded-lg border-2 border-solid shadow-md m-4 flex flex-col w-full ${
                        chart.type === "pie" ? "lg:w-96" : "lg:w-96"
                      }`}
                    >
                      <div className="flex flex-row justify-between mb-4 mt-0">
                        <h2 className="text-xl font-bold">{chart.title}</h2>
                      </div>
                      <div className="flex flex-col justify-center w-full my-auto">
                        <DataChart
                          chartData={usSalesData}
                          dimension={chart.dimension}
                          title={chart.title}
                          measure={chart.measure}
                          field={chart.field}
                          type={chart.type}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                {/* /End replace */}
     
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps(context) {
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      usSalesData,
    },
  };
}
