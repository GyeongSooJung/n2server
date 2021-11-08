import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Footer from "../../src/components/layout/Footer";
import Header from "../../src/components/layout/Header";
import SignUp from "../../src/components/page/SignUp";
import Main from "../../src/components/page/Main";

interface ViewProps {
  cate: any;
}

const Componentitem: NextPage<any> = (props) => {
  console.log(props);
  const cate = props.cate;
  const main = cate[0];
  const sub = cate[1] ? cate[1] : "";
  // console.log("메인 : ", main);

  switch (main) {
    case "SignUp":
      return <SignUp />;
    case "Main":
      return <Main />;
    default:
      return <SignUp />;
  }
  // switch(main) {
  //   case "SignUp" :
  //     return (<SignUp />)
  //   default :
  //     return (<SignUp />)
  // }
};

const View: NextPage<ViewProps> = ({ cate }) => {
  // console.log(cate)
  return (
    <div>
      <Head>
        <title>MK SOLUTION</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <Header />
        <Componentitem {...cate} />
        <Footer />
      </div>
    </div>
  );
};

export default View;

export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log("쿼리 : ", context.query.cate);
  // 토큰 확인 - 없을 경우, 로그인 화면으로 리디렉트
  if (!context.req.cookies.mk_token && context.query.cate != "SignUp") {
    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
    };
  }
  // SSR
  const cate = context.query;
  // console.log(cate);
  // console.log(context.req.headers['user-agent']?.indexOf('Mobi'));
  return {
    props: {
      cate,
    },
  };
};
