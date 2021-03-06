import type { NextPage } from 'next';

import { trpc } from '../lib/trpc';

const Home: NextPage = (props: any) => {
  const { data, isLoading } = trpc.useQuery(['question.get-all']);

  if (isLoading || !data) return <div>Loading...</div>;
  console.log(data);
  return <div>{data[0]?.question}</div>;
};

export default Home;
