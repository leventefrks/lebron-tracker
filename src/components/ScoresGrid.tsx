import Scores from './Scores';

interface Item {
  [key: string]: any;
}

interface ScoresGridProps {
  items: Item[];
}

const ScoresGrid: React.FC<ScoresGridProps> = ({ items }) => {
  return (
    <ul className="mx-auto grid grid-cols-1 gap-1 rounded-md bg-purple-800 py-4 text-center text-zinc-50 sm:grid-cols-3 sm:py-0 md:max-w-3xl">
      {items.map((item: Item, index: string) => (
        <Scores key={index} item={item} />
      ))}
    </ul>
  );
};

export default ScoresGrid;
