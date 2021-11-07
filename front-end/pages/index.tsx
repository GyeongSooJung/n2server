import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Footer from "../src/components/layout/Footer";
import Header from "../src/components/layout/Header";
import SignIn from "../src/components/page/Index/SignIn";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>MK SOLUTION</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }} >
        <Header />
        <SignIn />
        <Footer />
      </div>
    </div>
  );
};

export default Home;

export const getServerSideProps:GetServerSideProps = async (context) => { // SSR
  const data = context.query;
  console.log(data);
  // console.log(context.req.headers['user-agent']?.indexOf('Mobi'));
  return {
      props: {
          data
      }
  }
}
