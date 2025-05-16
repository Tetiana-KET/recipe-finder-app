'use client';

const Error = ({ error }: { error: Error }) => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col 2-xl text-red-600">
        {' '}
        <p>Error fetching data!</p> <p>{error.message}</p>
      </div>
    </div>
  );
};

export default Error;
