import { JSDOM } from 'jsdom';
import { NextApiRequest } from 'next';

const getCurrentStats = async (req: NextApiRequest, res: NextApiResponse) => {
  const result = await fetch(
    'https://www.espn.com/espn/feature/story/_/id/34584960/when-lebron-james-break-nba-career-points-record'
  );
  const html = await result.text();

  console.log(html);
  const dom = new JSDOM(html);
  const document = dom.window.document;

  const totalScores = document.querySelector(
    `.stat__block .sub-title`
  )?.textContent;

  const remainingScore = document.querySelector(
    `.stat__block.info:nth-of-type(2) .stat`
  )?.textContent;

  const remainingMatches = document.querySelector(
    `.stat__block.info:nth-of-type(3) .stat`
  )?.textContent;

  if (remainingScore && remainingMatches && totalScores) {
    res.status(200).json({ remainingScore, remainingMatches, totalScores });
  } else {
    res.status(500).send('Error: Could not retrieve remaining stats');
  }
};

export default getCurrentStats;
