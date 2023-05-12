"use client";
import Head from "next/head";

type Props = {};

const page = (props: Props) => {
  return (
    <>
      <Head>
        <title>Dashboards</title>
        <meta property="og:title" content="Dashboard" key="title" />
      </Head>
      <div className="flex h-full flex-col justify-center items-center">
        <h1 className="text-4xl mb-5 font-bold">DashboardHome</h1>
        <span className="text-7xl">💬</span>
      </div>
    </>
  );
};

export default page;
