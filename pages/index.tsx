import type { NextPage } from "next";
import Head from "next/head";
import Main from "../components/Main";
import Layout from "../components/Layout";
import { useAuthState } from "react-firebase-hooks/auth";
import { firebaseAuth } from "../firebase/clientApp";

const Home: NextPage = () => {
  const [user, loading, error] = useAuthState(firebaseAuth);
  // console.log the current user and loading status
  console.log("Loading:", loading, "|", "Current user:", user);
  return (
    <div className=" has-navbar-fixed-top">
      <Head>
        <title>Notice-Board</title>
        <meta
          name="description"
          content="Send Notices directly to your receivers"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Main />
      </Layout>
    </div>
  );
};

export default Home;
