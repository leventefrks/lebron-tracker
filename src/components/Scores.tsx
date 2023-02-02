import CountUp from 'react-countup';

const Scores = ({ item }) => {
  const number = Number(item.number.replace(',', ''));

  return (
    <li className="py-5">
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
