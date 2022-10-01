import React from 'react';
import { IoIosNotificationsOutline } from 'react-icons/io';
import './NavBar.scss';

export default function NavBar() {
  const [isUser, setIsUser] = React.useState(false);
  return (
    <>
      <div className='w-full border h-20 flex items-center justify-around'>
        <div className='w-20'>
          <img src="#" alt="img" />
        </div>
        <div className='flex'>
          <span className=' z-50 mt-2 -mr-8 font-bold'>
            <svg width="24" height="24" fill="none" stroke="#ffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="flex-none text-slate-300 dark:text-slate-400" aria-hidden="true"><path d="m19 19-3.5-3.5"></path><circle cx="11" cy="11" r="6"></circle></svg>
          </span>
          <input type="text" placeholder='Write your search..' className='input-search' />
        </div>
        <div className='flex items-center'>
          <span>
            <IoIosNotificationsOutline size={40} />
          </span>
          <span>
            {
              isUser
                ? <img src="#" alt="img" className='w-14 h-14 m-4 rounded-full border' />
                : <span className='cursor-pointer ml-4'>Login</span>
            }
          </span>
        </div>
      </div>
    </>
  );
}
