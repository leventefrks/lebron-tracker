import CountUp from 'react-countup';
import { KAREEM_POINTS } from '../constants';

interface Item {
  title: string;
  number: string;
}

interface ScoresProps {
  item: Item;
}

const Scores: React.FC<ScoresProps> = ({ item }) => {
  const number = Number(item.number.replace(',', ''));

  return (
    <li className="py-2 sm:py-5">
      <div className="text-xl uppercase">{item.title}</div>
      <span className="text-4xl font-black tracking-wider">
        <CountUp start={0} end={number}>
          <span>{number}</span>
        </CountUp>
      </span>
    </li>
  );
};

export default Scores;
