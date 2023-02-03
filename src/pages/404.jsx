import Image from 'next/image';
import Link from 'next/link';

const Scores = ({ item }) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 px-4">
      <Image
        src="/lebron-down.webp"
        alt="LeBron James"
        width={340}
        height={340}
      />
      <p className="text-xl text-gray-800">Ooops! LeBron is down</p>
      <Link href="/" className="text-small font-black text-gray-800">
        Go back
      </Link>
    </div>
  );
};

export default Scores;
