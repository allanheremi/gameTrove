'use client';
import {
  sortBy,
  platforms,
  fetchFromApi,
} from '@/app/constants';
import React, { useEffect } from 'react';
import Select from 'react-select';

const Body = () => {
  useEffect(() => {
    fetchFromApi();
  }, []);

  return (
    <>
      <div className="w-screen flex flex-col text-center grow">
        <h1 className="text-4xl md:text-6xl lg:text-7xl text-center p-2 grow">
          New and trending
        </h1>
        <p className="p-2 text-md md:text-lg lg:text-xl grow">
          Based on player count and release date
        </p>

        <div className="w-full flex justify-center gap-4 py-4 text-black text-sm md:text-lg lg:text-xl">
          <Select options={sortBy} className="w-2/5" placeholder="Sort by" id='sort' />
          <Select
            options={platforms}
            className="w-2/5"
            placeholder="Platform"
            id='platforms'
          />
        </div>
      </div>
    </>
  );
};

export default Body;
