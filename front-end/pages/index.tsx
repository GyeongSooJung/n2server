import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Footer from "../src/components/layout/Footer";
import Header from "../src/components/layout/Header";
import SignIn from "../src/components/page/Index/SignIn";
import styled from "styled-components";
import { parseJwt } from "../src/modules/parseJwt";
import { CompanyApproval } from "../src/models/company.entity";
import FileUpload from "../src/components/page/SignUp/Body/fileUpload";

//SCSS
const IndexDiv = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

interface SignInProps {
  saveId: string;
  saveCheck: boolean;
  cApproval?: string;
}

const Home: NextPage<SignInProps> = (props) => {
  const headerProps = { cate: [""] };
  // props 재정의
  const saveId = props.saveId;
  const saveCheck = props.saveCheck;
  const cApproval = props?.cApproval;

  return (
    <div>
      <Head>
        <title>MK SOLUTION</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <IndexDiv>
        <Header {...headerProps} />
        {cApproval === "before" ? <FileUpload /> : <SignIn {...props} />}
        <Footer />
      </IndexDiv>
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  // 쿠키 확인 - 아이디 저장, props로 전달(있을 경우 : 쿠키 / 없을 경우 : "")
  const saveId = context.req.cookies.saveId ? context.req.cookies.saveId : ""; // 저장된 아이디(id)
  const saveCheck = context.req.cookies.saveId ? true : false; // 저장 여부(boolean)
  // 토큰 확인 - 있을 경우, 메인 화면으로 리디렉트
  if (context.req.cookies.mk_token) {
    const tokenValue = parseJwt(context.req.cookies.mk_token);
    const cApproval = tokenValue.cApproval;
    if (cApproval === CompanyApproval.BEFORE) {
      return {
        props: {
          saveId,
          saveCheck,
          cApproval,
        },
      };
    } else if (cApproval === CompanyApproval.ING) {
      return {
        props: {
          saveId,
          saveCheck,
          cApproval,
        },
      };
    } else {
      return {
        redirect: {
          permanent: false,
          destination: "/view/main",
        },
      };
    }
  }
  return {
    props: {
      saveId,
      saveCheck,
    },
  };
};
