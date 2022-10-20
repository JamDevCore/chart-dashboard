import { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  PaintBrushIcon,
  UsersIcon,
  Cog6ToothIcon,
  XMarkIcon,
  FolderArrowDownIcon,
} from "@heroicons/react/24/outline";
import usSalesData from "../data/us-sales.js";
import DataChart from "../components/DataChart";
import Modal from "../components/Modal";
import ChartEditor from "../components/ChartEditor";
import ReactTooltip from "react-tooltip";
import { saveAs } from "file-saver";

const navigation = [
  { name: "Edit Charts", href: "#", icon: Cog6ToothIcon, current: true },
  { name: "Public Dashboard", href: "#", icon: UsersIcon, current: false },
  {
    name: "Design & Brand",
    href: "javascript:void(0)",
    icon: PaintBrushIcon,
    current: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const getQueryString = (charts) => {
  return `${"?" + encodeURIComponent(JSON.stringify(charts))}`;
};

export default function Dashboard({ usSalesData }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [charts, setCharts] = useState([]);
  const [chartModalIsOpen, setChartModalIsOpen] = useState(false);
  const [selectedChart, setSelectedChart] = useState();
  const [saveCharts, setSaveCharts] = useState(false);

  const setDefaultCharts = () => {
    setCharts([
      {
        type: "pie",
        dimension: "region",
        field: "total",
        measure: "sum",
        title: "Total USD spent per region",
      },
      {
        type: "bar",
        dimension: "category",
        field: "qty_ordered",
        measure: "mean",
        title: "Avg quantity per category",
      },
      {
        type: "pie",
        dimension: "status",
        field: "total",
        measure: "sum",
        title: "Total spend over order status",
      },
      {
        type: "bar",
        dimension: "state",
        field: "value",
        measure: "mean",
        title: "Avg value per state",
      },
    ]);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const queryString = document.location.search;
      if (!queryString) {
        // Also check local storage for browser saved charts
        // Would be cool to have a chart loaded (load a set from someone elses share link)
        const existingCharts = localStorage.getItem("charts");
        if (existingCharts) {
          const charts = JSON.parse(existingCharts);
          setCharts(charts);
        } else {
          setDefaultCharts();
        }
      } else {
        // parse query string and set charts
        
        let decodedQueryString = decodeURIComponent(queryString);
        // Found last minute issue in production online which would need further investigation - for now we're just treating prod and dev differently
        decodedQueryString = !process.VERCEL_ENV ? decodedQueryString.slice(1, -1) : decodedQueryString
        const charts = JSON.parse(decodedQueryString);
        setCharts(charts);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("charts", JSON.stringify(charts));
  }, [charts]);

  return (
    <>
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 md:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-gray-800">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 right-0 -mr-12 pt-2">
                      <button
                        type="button"
                        className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="h-0 flex-1 overflow-y-auto pt-5 pb-4">
                    <div className="flex flex-shrink-0 items-center px-4">
                      <img
                        className="h-8 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                        alt="Vizzly"
                      />
                    </div>
                    <nav className="mt-5 space-y-1 px-2">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          data-tip={
                            item.name === "Design & Brand"
                              ? "Coming soon"
                              : null
                          }
                          href={
                            item.name === "Public Dashboard"
                              ? `/dashboard/${getQueryString(charts)}`
                              : item.href
                          }
                          className={classNames(
                            item.current
                              ? "bg-gray-900 text-white"
                              : "text-gray-300 hover:bg-gray-700 hover:text-white",
                            "group flex items-center px-2 py-2 text-base font-medium rounded-md"
                          )}
                        >
                          <item.icon
                            className={classNames(
                              item.current
                                ? "text-gray-300"
                                : "text-gray-400 group-hover:text-gray-300",
                              "mr-4 flex-shrink-0 h-6 w-6"
                            )}
                            aria-hidden="true"
                          />
                          {item.name}
                        </a>
                      ))}
                    </nav>
                  </div>
                  <div
                    data-tip="Coming soon..."
                    className="flex flex-shrink-0 bg-gray-700 p-4"
                  >
                    <button className="text-white text-center mx-auto text-sm">
                      Dark mode
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
              <div className="w-14 flex-shrink-0">
                {/* Force sidebar to shrink to fit close icon */}
              </div>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex min-h-0 flex-1 flex-col bg-gray-800">
            <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
              <div className="flex flex-shrink-0 items-center px-4">
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                  alt="Your Company"
                />
              </div>
              <nav className="mt-5 flex-1 space-y-1 px-2">
                {navigation.map((item) => (
                  <a
                    data-tip={
                      item.name === "Design & Brand" ? "Coming soon" : null
                    }
                    key={item.name}
                    href={
                      item.name === "Public Dashboard"
                        ? `/dashboard/${getQueryString(charts)}`
                        : item.href
                    }
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                    )}
                  >
                    <item.icon
                      className={classNames(
                        item.current
                          ? "text-gray-300"
                          : "text-gray-400 group-hover:text-gray-300",
                        "mr-3 flex-shrink-0 h-6 w-6"
                      )}
                      aria-hidden="true"
                    />
                    {item.name}
                  </a>
                ))}
              </nav>
            </div>
            <div
              data-tip="Coming soon..."
              className="flex flex-shrink-0 bg-gray-700 p-4"
            >
              <button className="text-white text-center mx-auto text-sm">
                Dark mode
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-col md:pl-64">
          <div className="sticky top-0 z-10 bg-gray-100 pl-1 pt-1 sm:pl-3 sm:pt-3 md:hidden">
            <button
              type="button"
              className="-ml-0.5 -mt-0.5 inline-flex h-12 w-12 items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <main className="flex-1">
            <div className="py-6">
              <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 inline flex flex-row space-between flex-wrap sm:nowrap">
                <h1 className="text-2xl font-semibold text-gray-900 px-4">
                  Dashboard
                </h1>
                <div className="mr-0 ml-0 sm:ml-auto">
                  <button
                    onClick={(e) => {
                      setDefaultCharts();
                      setSaveCharts(!saveCharts);
                      e.target.innerHTML = "Resetting...";
                      setTimeout(() => {
                        e.target.innerHTML = "Reset to default";
                      }, 500);
                    }}
                    className="mr-4 m-4 mb-0 sm:my-0 ml-0 sm:ml-auto mr-8 items-center rounded-md border border-indigo-600 px-4 py-2 text-base font-medium text-indigo-600 shadow-sm  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Reset to default
                  </button>
                  <button
                    onClick={(e) => {
                      navigator.clipboard.writeText(
                        `${document.location}/dashboard/${getQueryString(
                          charts
                        )}`
                      );
                      e.target.innerHTML = "Copied...";
                      setTimeout(() => {
                        e.target.innerHTML = "Copy share link";
                      }, 500);
                    }}
                    className="ml-0 m-4 sm:my-0 sm:ml-auto mr-8 items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Copy share link
                  </button>
                </div>
              </div>

              <div className="mx-auto w-full px-4 sm:px-6 md:px-8">
                {/* Replace with your content */}
                <div
                  className=" flex flex-col lg:flex-row lg:flex-wrap"
                  key={saveCharts}
                >
                  <div
                    style={{ minWidth: "45%" }}
                    className="h-auto w-full p-6 lg:w-96 rounded-lg border-2 border-dashed border-gray-200 m-4 flex flex-col justify-center"
                  >
                    <button
                      className="mx-auto"
                      onClick={() => {
                        setChartModalIsOpen(true);
                      }}
                    >
                      <p className="text-gray-400">Create new chart +</p>
                    </button>
                  </div>
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
                        <div className="px-0 mx-0">
                          {/* Turn these into a drop down menu next */}
                          <button
                            type="button"
                            className="inline-flex w-6 items-center rounded-md border border-transparent text-gray-800 text-base font-medium"
                            onClick={async () => {
                              await setSelectedChart(index);
                              setChartModalIsOpen(true);
                            }}
                          >
                            <Cog6ToothIcon />
                          </button>
                          <button
                            type="button"
                            className="inline-flex w-6 items-center rounded-md border border-transparent text-gray-800 text-base font-medium"
                            onClick={async () => {
                              const canvasSave = document.getElementById(
                                chart.title
                              );
                              canvasSave.toBlob(function (blob) {
                                saveAs(blob, chart.title);
                              });
                            }}
                          >
                            <FolderArrowDownIcon />
                          </button>
                          <button
                            type="button"
                            className="inline-flex w-6 items-center rounded-md border border-transparent text-gray-800 text-base font-medium"
                            onClick={async () => {
                              const newCharts = charts.filter((item, i) => {
                                return index !== i;
                              });
                              setCharts(newCharts);
                            }}
                          >
                            <XMarkIcon />
                          </button>
                        </div>
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
      {chartModalIsOpen && (
        <Modal
          setChartModalIsOpen={setChartModalIsOpen}
          chartModalIsOpen={chartModalIsOpen}
        >
          <ChartEditor
            setChartModalIsOpen={setChartModalIsOpen}
            chartData={usSalesData}
            title={
              typeof selectedChart === "number"
                ? charts[selectedChart].title
                : ""
            }
            measure={
              typeof selectedChart === "number"
                ? charts[selectedChart].measure
                : ""
            }
            dimension={
              typeof selectedChart === "number"
                ? charts[selectedChart].dimension
                : ""
            }
            field={
              typeof selectedChart === "number"
                ? charts[selectedChart].field
                : ""
            }
            type={
              typeof selectedChart === "number"
                ? charts[selectedChart].type
                : ""
            }
            setCharts={setCharts}
            charts={charts}
            id={selectedChart}
            setSaveCharts={setSaveCharts}
            saveCharts={saveCharts}
            setSelectedChart={setSelectedChart}
          />
        </Modal>
      )}
      <ReactTooltip backgroundColor="black" textColor="white" />
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
