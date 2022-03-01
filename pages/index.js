import Head from "next/head";
import dynamic from "next/dynamic";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

import statusCards from "../assets/JsonData/status-card-data.json";
import StatusCard from "../components/statuscard/StatusCard";
import Link from "next/link";
import Table from "../components/table/Table";
import Badge from "../components/badge/Badge";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
const chartOptions = {
  series: [
    {
      name: "Sales",
      data: [40, 70, 50, 20, 90, 30, 91, 60, 160],
    },
    {
      name: "Store",
      data: [40, 30, 60, 80, 50, 20, 11, 50, 110],
    },
  ],
  options: {
    color: ["#6ab04c", "#2980b9"],
    chart: {
      background: "transparent",
    },
    datalabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
      ],
    },
    legend: {
      position: "top",
    },
    grid: {
      show: false,
    },
  },
};

const topCustomers = {
  head: ["user", "total orders", "total spending"],
  body: [
    {
      username: "john doe",
      order: "490",
      price: "$15,00",
    },
    {
      username: "frank iva",
      order: "45",
      price: "$12,251",
    },
    {
      username: "anthony baker",
      order: "950",
      price: "$10,485",
    },
    {
      username: "brad bit",
      order: "530",
      price: "$55,55",
    },
  ],
};

const renderCustomerHead = (item, index) => (
  <th key={index} className="th">
    {item}
  </th>
);
const renderCustomerBody = (item, index) => (
  <tr key={index} className="tr">
    <td className="td">{item.username}</td>
    <td className="td">{item.order}</td>
    <td className="td">{item.price}</td>
  </tr>
);

const latestOrders = {
  header: ["order id", "user", "total price", "date", "status"],
  body: [
    {
      id: "#OD1711",
      user: "john doe",
      date: "17 Jun 2021",
      price: "$900",
      status: "shipping",
    },
    {
      id: "#OD1712",
      user: "frank iva",
      date: "1 Jun 2021",
      price: "$400",
      status: "paid",
    },
    {
      id: "#OD1713",
      user: "anthony baker",
      date: "27 Jun 2021",
      price: "$200",
      status: "pending",
    },
    {
      id: "#OD1712",
      user: "frank iva",
      date: "1 Jun 2021",
      price: "$400",
      status: "paid",
    },
    {
      id: "#OD1713",
      user: "anthony baker",
      date: "27 Jun 2021",
      price: "$200",
      status: "refund",
    },
  ],
};

const orderStatus = {
  shipping: "primary",
  pending: "warning",
  paid: "success",
  refund: "danger",
};

const renderOrderHead = (item, index) => (
  <th key={index} className="th">
    {item}
  </th>
);

const renderOrderBody = (item, index) => (
  <tr key={index} className="tr">
    <td className="td">{item.id}</td>
    <td className="td">{item.user}</td>
    <td className="td">{item.price}</td>
    <td className="td">{item.date}</td>
    <td className="td">
      <Badge type={orderStatus[item.status]} content={item.status} />
    </td>
  </tr>
);

export default function Home() {
  const { t, i18n } = useTranslation();
  return (
    <div>
      <Head>
        <title>Admin Multiple-Theme</title>
      </Head>
      <h2 className="page-header">{t("home:homePage")}</h2>
      <div className="row">
        <div className="col-6">
          <div className="row">
            {statusCards.map((item, index) => (
              <div className="col-6">
                <StatusCard
                  icon={item.icon}
                  count={item.count}
                  title={item.title}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="col-6">
          <div className="card full-height">
            <Chart
              options={chartOptions.options}
              series={chartOptions.series}
              type="line"
              height="100%"
            />
          </div>
        </div>
        <div className="col-12">
          <div className="card full-height">
            <Chart
              options={chartOptions.options}
              series={chartOptions.series}
              type="bar"
              height="100%"
            />
          </div>
        </div>
        <div className="col-5">
          <div className="card">
            <div className="card__header">
              <h3>top customer</h3>
            </div>
            <div className="card__body">
              <Table
                headData={topCustomers.head}
                renderHead={(item, index) => renderCustomerHead(item, index)}
                bodyData={topCustomers.body}
                renderBody={(item, index) => renderCustomerBody(item, index)}
              />
            </div>

            <div className="card__footer">
              <Link href="/">{t("home:viewAll")}</Link>
            </div>
          </div>
        </div>
        <div className="col-7">
          <div className="card">
            <div className="card__header">
              <h3>Latest orders</h3>
            </div>
            <div className="card__body">
              <Table
                headData={latestOrders.header}
                renderHead={(item, index) => renderOrderHead(item, index)}
                bodyData={latestOrders.body}
                renderBody={(item, index) => renderOrderBody(item, index)}
              />
            </div>
            <div className="card__footer">
              <Link href="/">{t("home:viewAll")}</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["home"])),
  },
});
