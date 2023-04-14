import React from "react";
import { PageMessage, Button, Link } from "@acme/ui-react";
import { BiArrowBack } from "react-icons/bi";
import Head from "next/head";

const NotFound = () => {
  return (
    <>
      <Head>
        <title>404 | Page Not Found</title>
      </Head>
      <PageMessage
        title="Page Not Found"
        message="Oops! We're sorry, but the page you're looking for can't be found. It's possible that the page has been moved or deleted, or that you've entered the URL incorrectly."
        code={404}
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

export default NotFound;
