import CountUp from 'react-countup';

const Scores = ({ item }) => {
  const numberCast = value => Number(value.replace(',', '')) || 0;

  return (
    <li className="py-2 sm:py-5">
      <div className="text-xl uppercase">{item.title}</div>
      <span className="text-4xl font-black tracking-wider">
        <CountUp start={0} end={numberCast(item.stat)}>
          {({ countUpRef }) => (
            <span ref={countUpRef}>{numberCast(item.stat)}</span>
          )}
        </CountUp>
      </span>
    </li>
  );
};

export default Scores;
