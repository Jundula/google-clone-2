import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Body from "../components/Body";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Home: NextPage = () => {
  
  
  return (
    <div>
      <div className="relative">
        <Head>
          <title>Google Clone</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <Body />
      </div>
      <div className="absolute bottom-0 w-full">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
