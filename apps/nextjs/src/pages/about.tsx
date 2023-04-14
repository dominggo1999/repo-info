import Head from "next/head";

const About = () => {
  return (
    <div className="flex flex-col items-center text-center">
      <Head>
        <title>About</title>
      </Head>
      <h1 className="mb-4 text-3xl font-bold text-primary">About Us</h1>
      <p className="mb-8 max-w-screen-md md:px-20">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean auctor
        neque eu convallis mollis. Proin finibus tristique libero, sed blandit
        nulla convallis vel. Donec euismod consectetur ligula, sed bibendum est
        gravida id.
      </p>
    </div>
  );
};

export default About;
