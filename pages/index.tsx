import type { NextPage } from 'next';
import Head from 'next/head';

import { prisma } from '../lib/prisma';

const Home: NextPage = (props: any) => {
  return (
    <div className="lg:max-w-6xl mx-auto max-h-screen overflow-hidden">
      <Head>
        <title>Poll App</title>
      </Head>

      <main className="grid grid-cols-9">
        <h1>Hi</h1>

        <code>{props.questions}</code>
      </main>
    </div>
  );
};

export const getServerSideProps = async () => {
  const questions = await prisma.pollQuestion.findMany({});
  return {
    props: {
      questions: JSON.stringify(questions)
    }
  };
};

export default Home;
