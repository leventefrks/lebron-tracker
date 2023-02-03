import Scores from './Scores';

const ScoresGrid = ({ items }) => {
  return (
    <ul className="mx-auto grid grid-cols-1 gap-1 rounded-md bg-purple-800 py-4 text-center text-zinc-50 sm:grid-cols-3 sm:py-0 md:max-w-3xl">
      {items.map((item, index) => (
        <Scores key={index} item={item} />
      ))}
    </ul>
  );
};

export default ScoresGrid;
