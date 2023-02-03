import type {
  NextApiRequest,
  NextApiResponse,
  NextPage,
  GetServerSideProps,
} from 'next';
import { JSDOM } from 'jsdom';
import Head from 'next/head';
import Image from 'next/image';
import Title from '../components/Title';
import ScoresGrid from '../components/ScoresGrid';
import Social from '../components/Social';
// import Confetti from 'react-confetti';
// import useWindowSize from 'react-use/lib/useWindowSize';
import { BiCoffeeTogo } from 'react-icons/bi';

const { NEXT_BASE_URL: baseUrl } = process.env;

interface Props {
  items: [];
}

const Home: NextPage<Props> = ({ items }) => {
  return (
    <>
      <Head>
        <title>the Bron tracker</title>
        <meta name="description" content="The Bron tracker" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen w-full min-w-[320] items-center justify-center bg-zinc-50">
        <div className="mx-auto min-h-full w-full max-w-4xl flex-col px-4">
          <Title>
            <span className="text-6xl font-black">Bron</span> tracker
          </Title>
          <a
            href="https://www.buymeacoffee.com/leventefarkas"
            target="_blank"
            rel="noreferrer"
          >
            <BiCoffeeTogo className="absolute top-4 right-4 h-8 w-8 transform text-gray-800 duration-200 hover:scale-110" />
          </a>
          <Image
            className="mx-auto block"
            src="/lebron-james.webp"
            alt="LeBron James"
            width={340}
            height={340}
          />
          <ScoresGrid items={items} />
        </div>
        <Social />
      </main>
    </>
  );
};

interface Item {
  title: string;
  number: number;
}

interface Props {
  items: [];
}

export const getServerSideProps: GetServerSideProps<Props> = async ({
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

  const totalPoints = document.querySelector<HTMLHeadingElement>(
    `.stat__block .sub-title`
  )?.textContent;

  const remainingPoints = document.querySelector<HTMLHeadingElement>(
    `.stat__block.info:nth-of-type(2) .stat`
  )?.textContent;

  const remainingGames = document.querySelector<HTMLHeadingElement>(
    `.stat__block.info:nth-of-type(3) .stat`
  )?.textContent;

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  );

  const items: Item[] = [
    {
      title: 'total',
      number: numberCast(totalPoints),
    },
    {
      title: 'points needed',
      number: numberCast(remainingPoints),
    },
    {
      title: 'projected games',
      number: numberCast(remainingGames),
    },
  ];

  return {
    props: {
      items,
    },
  };
};

const numberCast = (value: string) => Number(value.replace(',', '')) || '';

export default Home;
