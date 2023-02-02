import CountUp from 'react-countup';

const Scores = ({ item }) => {
  const number = Number(item.number.replace(',', ''));

  return (
    <li className="flex flex-col py-5">
      <div className="text-xl uppercase">{item.title}</div>
      <span className="text-4xl">
        <CountUp start={0} end={number}>
          <span>{number}</span>
        </CountUp>
      </span>
    </li>
  );
};

export default Scores;