import React from "react";
import { PageMessage } from "@acme/ui-react";
import Head from "next/head";

const Offline = () => {
  return (
    <>
      <Head>
        <title>Offline</title>
      </Head>

      <PageMessage
        title="You Are Offline"
        message="Unable to connect. Please check your internet connection and try again."
      />
    </>
  );
};

export default Offline;
