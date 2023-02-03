import CountUp from 'react-countup';

const Scores = ({ item }) => {
  const numberCast = ({ stat }) => {
    if (stat === null || stat === undefined) {
      return 0;
    }
    return Number(stat.replace(',', '')) || 0;
  };

  const statistics = numberCast(item);

  return (
    <li className="py-2 sm:py-5">
      <div className="text-xl uppercase">{item.title}</div>
      <span className="text-4xl font-black tracking-wider">
        <CountUp start={0} end={statistics}>
          {({ countUpRef }) => <span ref={countUpRef}>{statistics}</span>}
        </CountUp>
      </span>
    </li>
  );
};

export default Scores;
