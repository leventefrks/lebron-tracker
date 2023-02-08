import {
  KAREEM_POINTS,
  TOTAL_POINTS,
  REMAINING_POINTS,
  REMAINING_GAMES,
} from '../constants';
import { JSDOM } from 'jsdom';
import Head from 'next/head';
import Image from 'next/image';
import Title from '../components/Title';
import Social from '../components/Social';
import ScoresGrid from '../components/ScoresGrid';
import AllTimeScorer from '../components/AllTimeScorer';
import Confetti from 'react-confetti';
import { SiVercel } from 'react-icons/si';
import { useState, useEffect, useRef } from 'react';

const { NEXT_BASE_URL: baseUrl } = process.env;

export const getServerSideProps = async ({ req, res }) => {
  const response = await fetch(baseUrl);

  if (!response.ok) {
    console.error('Failed to fetch data');
  }

  const html = await response.text();
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

  const isBreakRecord = numberCast(remainingPoints) === 0;

  const _totalPoints = numberCast(totalPoints);
  const _remainingPoints = numberCast(remainingPoints);
  const _remainingGames = numberCast(remainingGames);

  const initialData = [
    {
      title: TOTAL_POINTS,
      statistics: _totalPoints,
    },
    {
      title: REMAINING_POINTS,
      statistics: _remainingPoints,
    },
    {
      title: REMAINING_GAMES,
      statistics: _remainingGames,
    },
  ];

  return {
    props: {
      initialData,
      isBreakRecord,
    },
  };
};

const numberCast = value => Number(value.replace(',', ''));

const Home = ({ initialData = [], isBreakRecord = false }) => {
  const [items, setItems] = useState(initialData);
  const [isRecord, setIsBreakRecord] = useState(isBreakRecord);
  const [isEasterEgg, setIsEasterEgg] = useState(false);
  const [height, setHeight] = useState(null);
  const [width, setWidth] = useState(null);
  const confettiRef = useRef(null);

  useEffect(() => {
    setHeight(confettiRef.current.clientHeight);
    setWidth(confettiRef.current.clientWidth);
  }, []);

  const onClickLetterC = () => {
    if (isRecord) return;
    setIsEasterEgg(next => !next);
  };

  return (
    <>
      <Head>
        <title>Bron tracker</title>
        <meta name="description" content="Bron tracker" />

        <meta
          property="og:image"
          content="https://lebron-tracker.vercel.app/api/og"
        />
        <meta property="og:url" content="https://lebron-tracker.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Bron tracker" />
        <meta property="og:description" content="Bron tracker" />
        <meta
          property="og:image"
          content="https://lebron-tracker.vercel.app/api/og"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="lebron-tracker.vercel.app" />
        <meta
          property="twitter:url"
          content="https://lebron-tracker.vercel.app"
        />
        <meta name="twitter:title" content="Bron tracker" />
        <meta name="twitter:description" content="Bron tracker" />
        <meta
          name="twitter:image"
          content="https://lebron-tracker.vercel.app/api/og"
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen w-full min-w-[320] items-center justify-center bg-yellow-300">
        <div className="mx-auto min-h-full w-full max-w-4xl flex-col px-4">
          <Social />
          <Title>
            <span className="text-6xl font-black">Bron</span> tra
            <button
              onClick={onClickLetterC}
              className={`relative z-10 cursor-pointer ${
                isRecord ? 'cursor-default' : 'cursor-pointer'
              }`}
            >
              c
            </button>
            ker
          </Title>
          <Image
            className="mx-auto block"
            src="/lebron-james.webp"
            alt="LeBron James"
            priority="true"
            width={340}
            height={340}
          />
          {isRecord ? (
            <AllTimeScorer scores={items[0]} />
          ) : (
            <ScoresGrid items={items} />
          )}
          <a
            href="https://vercel.com/"
            target="_blank"
            rel="noreferrer"
            className="relative z-10 mt-20 mb-2 flex items-center justify-center gap-1"
          >
            <SiVercel className="h-4 w-4" />
            <span className="text-xs font-bold uppercase text-gray-800">
              vercel
            </span>
          </a>
        </div>
        <div className="absolute h-full w-full" ref={confettiRef}>
          {(isRecord || isEasterEgg) && (
            <Confetti width={width} height={height} />
          )}
        </div>
      </main>
    </>
  );
};

export default Home;
