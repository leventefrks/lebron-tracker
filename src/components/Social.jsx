import { AiFillGithub, AiFillTwitterCircle } from 'react-icons/ai';
import { BiCoffeeTogo } from 'react-icons/bi';

const Social = () => {
  return (
    <header className="mx-auto mt-2 mb-6 flex items-center justify-between text-gray-800 md:max-w-3xl">
      <div className="flex gap-4">
        <a
          href="https://github.com/leventefrks/lebron-tracker"
          rel="noreferrer"
          target="_blank"
          aria-label="Github"
          className="relative z-20"
        >
          <AiFillGithub className="h-8 w-8 transform duration-200 hover:scale-110" />
        </a>
        <a
          href="https://twitter.com/twevente_wolf"
          rel="noreferrer"
          target="_blank"
          aria-label="Twitter"
          className="relative z-20"
        >
          <AiFillTwitterCircle className="h-8 w-8 transform duration-200 hover:scale-110" />
        </a>
      </div>

      <a
        href="https://www.buymeacoffee.com/leventefarkas"
        rel="noreferrer"
        target="_blank"
        aria-label="Buy Me a Coffee"
        className="relative z-20"
      >
        <BiCoffeeTogo className="h-8 w-8 transform duration-200 hover:scale-110" />
      </a>
    </header>
  );
};

export default Social;
