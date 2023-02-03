import { AiFillGithub, AiFillTwitterCircle } from 'react-icons/ai';

type Props = {
  children: React.ReactNode;
};

const Title = ({ children }: Props) => {
  return (
    <h1 className="mb-2 text-center text-5xl text-gray-800">{children}</h1>
  );
};

export default Title;
