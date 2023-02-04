import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'edge',
};

export default function () {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#fde047',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div tw="flex flex-col text-white py-2 px-6 bg-purple-800 rounded-md shadow-xl max-w-xl">
          <h1 tw="text-5xl font-bold mb-2">Bron tracker</h1>
          <span tw="font-bold text-2xl">
            Are you ready to follow LeBron James&apos; record breaking?
          </span>
          <p className="text-xl">
            Witness history being made as LeBron James breaks the all-time
            scoring record. Follow his journey with real-time updates.
          </p>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
