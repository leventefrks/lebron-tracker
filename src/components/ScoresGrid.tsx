import Scores from './Scores';

const ScoresGrid = ({ items }) => {
  return (
    <ul className="grid grid-cols-1 gap-1 text-center text-gray-800 sm:grid-cols-3">
      {items.map((item: object, index: string) => (
        <Scores key={index} item={item} />
      ))}
    </ul>
  );
};

export default ScoresGrid;
