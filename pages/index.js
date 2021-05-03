import Head from "next/head";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div >
      <Head>
        <title>Vibe - InstantMessaging</title>
        <meta name="description" content="Created by Atharva Deshmukh" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Sidebar/>

    </div>
  );
}
