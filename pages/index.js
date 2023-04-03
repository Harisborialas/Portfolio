import Head from "next/head";
import MainPage from './components/MainPage'
export default function Home() {
 
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>
      <div>
        <MainPage/>
      </div>
    </>
  );
}
