import CountUp from 'react-countup';

const AllTimeScorer = ({ scores }) => {
  return (
    <div className="flex flex-col gap-8 rounded-md bg-purple-700 py-4 px-2 text-white">
      <div className="flex flex-col items-center">
        <div className="text-xl uppercase">{scores.title}</div>
        <div className="text-5xl font-black tracking-wider">
          <CountUp start={0} end={scores.statistics}>
            {({ countUpRef }) => (
              <span ref={countUpRef}>{scores.statistics}</span>
            )}
          </CountUp>
        </div>
      </div>
      <h1 className="text-center text-3xl font-light">
        Congratulations for becoming the NBA all-time scoring leader
      </h1>
    </div>
  );
};

export default AllTimeScorer;
