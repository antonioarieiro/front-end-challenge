import React from 'react';
import ActiveButton from '../Buttons/ActiveButton';
import Logo from '../../_assets/logo.gif'
import AccountOptions from '../AccountOptions/AccountOptions';
import ApikiContext from '../../_context/ApikiContext';
import LoginModal from '../Modals/LoginModal';
import { useNavigate } from 'react-router-dom';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { MdOutlineAccountCircle } from 'react-icons/md';
import './NavBar.scss';

export default function NavBar() {
  const { isUser, setIsUser } = React.useContext(ApikiContext);
  const [openMenu, setOpenMenu] = React.useState(false);
  const [isModalLogin, setIsModalLogin] = React.useState(false);
  const Navigate = useNavigate();
  const openModalLogin = () => {
    setIsModalLogin(true);
  };

  return (
    <>
      {
        <LoginModal setIsUser={setIsUser} isModalLogin={isModalLogin} setIsModalLogin={setIsModalLogin} />
      }
      <div className='w-full h-20 flex items-center justify-between md:justify-around'>
        <div className='w-36 mt-4'>
          <img src={Logo} alt="img" onClick={() => {Navigate('/')}}/>
        </div>
        <div className='flex cursor-not-allowed hidden md:flex'>
          <span className=' z-50 mt-2 -mr-8 font-bold'>
            <svg width="24" height="24" fill="none" stroke="#ffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-none text-slate-300 dark:text-slate-400" aria-hidden="true"><path d="m19 19-3.5-3.5"></path><circle cx="11" cy="11" r="6"></circle></svg>
          </span>
          <input disabled placeholder='Write your search..' className='input-search cursor-not-allowed' />
        </div>
        <div className='flex items-center'>
          <span className='mr-4 p-2 rounded-full bg-[#C2E7FF] notification'>
            <IoIosNotificationsOutline size={40} />
          </span>
          <span>
            {
              isUser.name
                ? <div className='p-2 rounded-full bg-[#C2E7FF]' onMouseEnter={() => { setOpenMenu(true); }} onMouseLeave={() => { setOpenMenu(false); }}>
                  <MdOutlineAccountCircle size={40} className='cursor-pointer account' />
                  {
                    openMenu && <AccountOptions setIsUser={setIsUser}/>
                  }
                </div>
                : <ActiveButton text={'Login'} action={true} exec={openModalLogin} />
            }
          </span>
        </div>
      </div>
    </>
  );
}
