import { AiFillGithub, AiFillTwitterCircle } from 'react-icons/ai';

const Social = () => {
  return (
    <footer className="absolute top-4 left-4 flex gap-4 text-gray-800">
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
    </footer>
  );
};

export default Social;