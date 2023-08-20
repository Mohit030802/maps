import React, { useEffect, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';

import Countries from './countries';

const Home = () => {
  

   

  return (
    <>
      <div className='flex justify-center items-center mt-2'>
        <input className='border-2 p-2 rounded-md' type="text" placeholder='Search....' />
        <button className='bg-blue-500 text-white p-2 rounded-md ml-2'><SearchIcon /></button>
      </div>
      <Countries />
    </>
  );
};

export default Home;
