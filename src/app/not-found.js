import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div>
               <div className="h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-5xl font-bold text-gray-800">404</h1>
      <p className="text-gray-500 mt-2">
        Oops! The page you’re looking for doesn’t exist.
      </p>

      <Link
        href="/"
        className="mt-5 px-6 py-2 bg-black text-white rounded-lg"
      >
        Go Home
      </Link>
    </div>
        </div>
    );
};

export default NotFound;