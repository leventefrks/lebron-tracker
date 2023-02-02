import type { NextApiRequest, NextApiResponse, NextPage } from 'next';
import { JSDOM } from 'jsdom';
import Head from 'next/head';
import Image from 'next/image';
import { KAREEM_POINTS } from '../constants';
import Title from '../components/Title';
import ScoresGrid from '../components/ScoresGrid';
import Social from '../components/Social';
import Confetti from 'react-confetti';
import useWindowSize from 'reac t-use/lib/useWindowSize';
import { BiCoffeeTogo } from 'react-icons/bi';

const { NEXT_BASE_URL: baseUrl } = process.env;

const Home: NextPage = ({ items }) => {
  return (
    <>
      <Head>
        <title>the Bron tracker</title>
        <meta name="description" content="The Bron tracker" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen w-full min-w-[320] items-center justify-center">
        <div className="mx-auto min-h-full w-full max-w-4xl flex-col">
          <Title>
            <span className="text-6xl font-black">Bron</span> tracker
          </Title>
          <a
            href="https://www.buymeacoffee.com/leventefarkas"
            target="_blank"
            rel="noreferrer"
          >
            <BiCoffeeTogo className="absolute top-6 right-6 h-8 w-8 transform text-gray-800 duration-200 hover:scale-110" />
          </a>
          <Image
            className="mx-auto block"
            src="/lebron-james.webp"
            alt="LeBron James"
            width={350}
            height={350}
          />
          <ScoresGrid items={items} />
        </div>
        <Social />
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

  const totalPoints = document.querySelector(
    `.stat__block .sub-title`
  )?.textContent;

  const remainingPoints = document.querySelector(
    `.stat__block.info:nth-of-type(2) .stat`
  )?.textContent;

  const remainingGames = document.querySelector(
    `.stat__block.info:nth-of-type(3) .stat`
  )?.textContent;

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  );

  const items = [
    {
      title: 'total',
      number: totalPoints,
    },
    {
      title: 'points needed',
      number: remainingPoints,
    },
    {
      title: 'projected games',
      number: remainingGames,
    },
  ];

  return {
    props: {
      items,
    },
  };
};

export default Home;
