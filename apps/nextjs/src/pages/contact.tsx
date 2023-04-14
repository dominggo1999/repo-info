import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { Link } from "@acme/ui-react";
import Head from "next/head";

const Contact = () => {
  return (
    <div className="flex flex-col items-center">
      <Head>
        <title>Contact</title>
      </Head>

      <h1 className="mb-8 text-3xl font-bold text-primary">Contact Us</h1>

      <div className="mb-6 flex items-center space-x-4">
        <FaMapMarkerAlt className="text-xl text-primary" />
        <p>1234 Main Street, Anytown USA</p>
      </div>

      <div className="mb-6 flex items-center space-x-4">
        <FaPhone className="text-xl text-primary" />
        <p>(123) 456-7890</p>
      </div>

      <div className="flex items-center space-x-4">
        <FaEnvelope className="text-xl text-primary" />
        <Link
          external
          href="mailto:info@test.com"
          className="hover:text-primary"
        >
          info@acme.com
        </Link>
      </div>
    </div>
  );
};

export default Contact;
