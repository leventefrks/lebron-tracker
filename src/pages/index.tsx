import { type NextPage } from 'next';
import { JSDOM } from 'jsdom';
import Head from 'next/head';
import { NextApiRequest, NextApiResponse } from 'next';

const { NEXT_BASE_URL: baseUrl } = process.env;

const Home: NextPage = ({ totalScores, remainingScore, remainingMatches }) => {
  return (
    <>
      <Head>
        <title>LeBron tracker</title>
        <meta name="description" content="The Bron tracker" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen w-full min-w-[320] bg-indigo-800">
        <div className="mx-auto h-full w-full max-w-4xl bg-cover bg-center bg-no-repeat">
          <h1 className="text-center text-5xl text-white">The Bron Tracker</h1>

          <div className="grid grid-cols-1 gap-2 text-center text-white sm:grid-cols-3">
            <div className="flex flex-col py-5">
              <div className="text-xl uppercase">total</div>
              <span className="text-3xl">{totalScores}</span>
            </div>

            <div className="flex flex-col py-5">
              <div className="text-xl uppercase">points needed</div>
              <span className="text-3xl font-black">{remainingScore}</span>
            </div>

            <div className="flex flex-col py-5">
              <div className="text-xl uppercase">
                <div className="text-xl uppercase">projected matches</div>
                <span className="text-3xl font-black">{remainingMatches}</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export const getServerSideProps = async ({
  req,
  res,
}: {
  req: NextApiRequest;
  res: NextApiResponse;
}) => {
  const result = await fetch(baseUrl);
  const html = await result.text();

  const dom = new JSDOM(html);
  const document = dom.window.document;

  const totalScores = document.querySelector(
    `.stat__block .sub-title`
  )?.textContent;

  const remainingScore = document.querySelector(
    `.stat__block.info:nth-of-type(2) .stat`
  )?.textContent;

  const remainingMatches = document.querySelector(
    `.stat__block.info:nth-of-type(3) .stat`
  )?.textContent;

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  );

  return {
    props: {
      remainingScore,
      remainingMatches,
      totalScores,
    },
  };
};

export default Home;
