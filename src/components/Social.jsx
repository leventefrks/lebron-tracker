import { AiFillGithub, AiFillTwitterCircle } from 'react-icons/ai';
import { BiCoffeeTogo } from 'react-icons/bi';

const Social = () => {
  return (
    <header className="relative z-10 mx-auto mb-8 flex items-center justify-between text-gray-800 md:max-w-3xl">
      <div className="flex gap-4">
        <a
          href="https://github.com/leventefrks/lebron-tracker"
          rel="noreferrer"
          target="_blank"
        >
          <AiFillGithub className="h-8 w-8 transform duration-200 hover:scale-110" />
        </a>
        <a
          href="https://twitter.com/twevente_wolf"
          rel="noreferrer"
          target="_blank"
        >
          <AiFillTwitterCircle className="h-8 w-8 transform duration-200 hover:scale-110" />
        </a>
      </div>

      <a
        href="https://www.buymeacoffee.com/dashboard"
        rel="noreferrer"
        target="_blank"
      >
        <BiCoffeeTogo className="h-8 w-8 transform duration-200 hover:scale-110" />
      </a>
    </header>
  );
};

export default Social;
