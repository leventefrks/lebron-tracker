import { type NextPage } from 'next';
import Head from 'next/head';
import useSWR from 'swr';

const Home: NextPage = () => {
  const fetcher = (...args) => fetch(...args).then(res => res.json());

  const { data, error, isLoading } = useSWR('api/getCurrentStats', fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  const { totalScores, remainingScore, remainingMatches } = data;

  return (
    <>
      <Head>
        <title>LeBron tracker</title>
        <meta name="description" content="The Bron tracker" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen w-full bg-indigo-800">
        <div className="mx-auto w-full max-w-4xl">
          <h1 className="text-center text-5xl text-white">The Bron Tracker</h1>
          <div className="grid grid-cols-3 gap-2 text-center text-yellow-300">
            <div className="text-4xl font-black">{totalScores}</div>
            <div className="text-4xl font-black">{remainingScore}</div>
            <div className="text-4xl font-black">{remainingMatches}</div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
