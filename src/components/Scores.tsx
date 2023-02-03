import CountUp from 'react-countup';

interface Item {
  title: string;
  number: number;
}

interface ScoresProps {
  item: Item;
}

const Scores: React.FC<ScoresProps> = ({ item }) => {
  return (
    <li className="py-2 sm:py-5">
      <div className="text-xl uppercase">{item.title}</div>
      <span className="text-4xl font-black tracking-wider">
        <CountUp start={0} end={item.number}>
          {({ countUpRef }) => <span ref={countUpRef}>{item.number}</span>}
        </CountUp>
      </span>
    </li>
  );
};

export default Scores;
