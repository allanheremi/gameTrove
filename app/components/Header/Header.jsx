import React from 'react';

const Header = () => {
  return (
    <>
      <header className="w-screen flex gap-4 p-4 justify-around lg:p-12 items-center">
        <div>
          <h1 className="font-mono lg:text-3xl select-none">GameTrove</h1>
        </div>
        <input
          type="text"
          className="rounded-lg md:rounded-2xl w-3/5 lg:w-2/5 text-black px-2 py-1 lg:px-4 focus:bg-gray-500 duration-150 border-none outline-none focus:text-white focus:placeholder:text-white"
          placeholder="Search games..."
        />
        <div>
          <h3 className="lg:text-2xl hover:cursor-pointer">About</h3>
        </div>
      </header>
    </>
  );
};

export default Header;
