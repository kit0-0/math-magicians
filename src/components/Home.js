import React from 'react';

function Home() {
  return (
    <div className=" h-screen flex flex-col ml-4">
      <h1 className="text-4xl font-bold mt-8">Welcome to Math Magicians</h1>
      <p className="text-xl mt-4 w-screen">
        Math Magicians is a web application that provides a calculator for performing arithmetic
        calculations and a random quote generator to inspire and motivate you.
      </p>
      <p className="text-lg mt-4">
        Get started by exploring the calculator functionality or discovering insightful quotes.
      </p>
    </div>
  );
}

export default Home;
