import CountUp from 'react-countup';

const Scores = ({ item }) => {
  return (
    <li className="py-2 sm:py-5">
      <div className="text-xl uppercase">{item.title}</div>
      <span className="text-4xl font-black tracking-wider">
        <CountUp start={0} end={item.statistics} delay={0}>
          {({ countUpRef }) => <span ref={countUpRef}>{item.statistics}</span>}
        </CountUp>
      </span>
    </li>
  );
};

export default Scores;
