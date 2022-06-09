import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div className="lg:max-w-6xl mx-auto max-h-screen overflow-hidden">
      <Head>
        <title>Poll App</title>
      </Head>

      <main className="grid grid-cols-9">
        <h1>Hi</h1>
      </main>
    </div>
  );
};

export default Home;
