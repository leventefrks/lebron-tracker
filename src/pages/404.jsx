import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const Scores = ({ item }) => {
  return (
    <>
      <Head>
        <title>the Bron tracker - 404</title>
        <meta name="description" content="The Bron tracker" />
        <meta
          property="og:image"
          content="https://inthepocket.tech/api/og-image?name=Next.js&stage=adopt"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center gap-4 px-4">
        <Image
          src="/lebron-down.webp"
          alt="LeBron James"
          width={240}
          height={240}
        />
        <p className="text-xl text-gray-800">Ooops! LeBron is down</p>
        <Link href="/" className="text-small font-black text-gray-800">
          Go back
        </Link>
      </main>
    </>
  );
};

export default Scores;
