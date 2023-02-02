import { AiFillGithub, AiFillTwitterCircle } from 'react-icons/ai';

const Social = () => {
  return (
    <footer className="absolute top-4 left-4 flex gap-4 text-gray-800">
      <a href="https://github.com/leventefrks/lebron-tracker">
        <AiFillGithub
          className="h-8 w-8 transform duration-200 hover:scale-110"
          target="_blank"
          rel="noreferrer"
        />
      </a>
      <a href="https://twitter.com/twevente_wolf">
        <AiFillTwitterCircle
          className="h-8 w-8 transform duration-200 hover:scale-110"
          target="_blank"
          rel="noreferrer"
        />
      </a>
    </footer>
  );
};

export default Social;
