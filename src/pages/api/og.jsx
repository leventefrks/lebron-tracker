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
        <div tw="flex text-gray-800 items-center py-2 px-6 bg-white rounded-md shadow-xl">
          <div tw="flex flex-col">
            <span tw="max-w-md text-light">
              How close is LeBron to the all-time scoring record?
            </span>
            <span tw="font-bold">Follow his scoring real-time!</span>
          </div>
          <h1 tw="text-4xl font-bold mb-2 flex-1 ml-4 text-center">
            Bron tracker
          </h1>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
