import React from "react";
import { PageMessage, Button, Link } from "@acme/ui-react";
import { BiArrowBack } from "react-icons/bi";
import Head from "next/head";

const ServerError = () => {
  return (
    <>
      <Head>
        <title>500 | Server Error</title>
      </Head>
      <PageMessage
        title="Internal server error"
        code={500}
        message="Oops, something went wrong! Our team has been notified and is working to resolve the issue. Please try again later. Thank you for your patience."
      />
      <div className="mt-5 flex justify-center">
        <Button
          component={Link}
          href="/"
          icon={BiArrowBack}
          iconPosition="left"
          size="sm"
        >
          Back to Home
        </Button>
      </div>
    </>
  );
};

export default ServerError;
