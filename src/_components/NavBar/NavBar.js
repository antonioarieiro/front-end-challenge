import React from 'react';

export default function NavBar() {
  return (
    <>
      <div className='w-full border h-20 flex items-center justify-around'>
        <div className='w-20'>
          <img src="#" alt="img" />
        </div>
        <div>
          <input type="text" placeholder='search..' />
        </div>
        <div className='flex items-center'>
          <span>Noti</span>
          <span>Profile</span>
        </div>
      </div>
    </>
  );
}
