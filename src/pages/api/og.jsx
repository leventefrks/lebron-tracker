import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'edge',
};

export default function () {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#fafafa',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div tw="flex flex-col text-gray-800 py-2 px-6 bg-white rounded-md shadow-xl">
          <h1 tw="text-4xl font-bold mb-2">Bron tracker</h1>
          <span tw="font-bold max-w-md">
            Are you ready to follow LeBron James' record breaking?
          </span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
