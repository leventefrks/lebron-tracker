import type { NextApiRequest, NextApiResponse, NextPage } from 'next';
import { JSDOM } from 'jsdom';
import Head from 'next/head';
import Scores from '../components/Scores';
import Social from '../components/Social';
// import Confetti from 'react-confetti';
import { useState } from 'react';
import Image from 'next/image';
import useWindowSize from 'react-use/lib/useWindowSize';

const { NEXT_BASE_URL: baseUrl } = process.env;

const Home: NextPage = ({ items }) => {
  return (
    <>
      <Head>
        <title>The Bron tracker</title>
        <meta name="description" content="The Bron tracker" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen w-full min-w-[320] items-center justify-center">
        <div className="mx-auto min-h-full w-full max-w-4xl flex-col">
          <h1 className="mb-2 text-center text-5xl text-gray-800">
            The Bron Tracker
          </h1>
          <Image
            className="mx-auto block"
            src="/lebron-james.webp"
            alt="LeBron James vs Kareem Abdul Jabbar"
            width={350}
            height={350}
          />
          <ul className="grid grid-cols-1 gap-1 text-center text-gray-800 sm:grid-cols-3">
            {items.map((item: object, index: string) => (
              <Scores key={index} item={item} />
            ))}
          </ul>
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
