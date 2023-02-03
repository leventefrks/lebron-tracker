import CountUp from 'react-countup';

interface Item {
  title: string;
  stat: string;
}

interface ScoresProps {
  item: Item;
}

const Scores: React.FC<ScoresProps> = ({ item }) => {
  const numberCast = ({ stat }: { stat: string | null | undefined }) => {
    if (stat === null || stat === undefined) {
      return 0;
    }
    return Number(stat.replace(',', '')) || '';
  };

  const stat: number = numberCast(item);

  return (
    <li className="py-2 sm:py-5">
      <div className="text-xl uppercase">{item.title}</div>
      <span className="text-4xl font-black tracking-wider">
        <CountUp start={0} end={stat}>
          {({ countUpRef }) => <span ref={countUpRef}>{stat}</span>}
        </CountUp>
      </span>
    </li>
  );
};

export default Scores;
