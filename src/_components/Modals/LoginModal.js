import React from 'react';
import ActiveButton from '../Buttons/ActiveButton';
import CancelButton from '../Buttons/CancelButton';
import './Modal.scss';
export default function LoginModal(props) {
  const { isModalLogin, setIsModalLogin, setIsUser } = props;
  const [userData, setUserData] = React.useState([]);

  const loginUser = () => {
    setIsUser(userData);
    setIsModalLogin(false);
  };

  const cancelLogin = () => {
    setIsModalLogin(false);
  };

  return (
    <>
      <div className={
        isModalLogin
        ? 'w-full flex items-center flex-col mx-auto absolute my-auto h-full justify-center'
        : 'hidden'
      }>
        <div className='relative p-4 w-full max-w-md h-full md:h-auto'>

          <div className='relative bg-white rounded-lg shadow dark:bg-gray-700'>
            <button 
            onClick={() => {setIsModalLogin(false)}}
            type='button' className='absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white' data-modal-toggle='crypto-modal'>
              <svg aria-hidden='true' className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z' clipRule='evenodd'></path></svg>
              <span className='sr-only'>Close modal</span>
            </button>

            <div className='py-4 px-6 rounded-t border-b dark:border-gray-600'>
              <h3 className='text-base font-semibold text-gray-900 lg:text-xl dark:text-white'>
                Connect Account
              </h3>
            </div>

            <div className='p-6'>
             <div className='flex flex-col login-form'>
              <label htmlFor='login'>
                Login
              </label>
              <input type='text' id="login" placeholder='login' onChange={(event) => {setUserData({name: event.target.value})}} />
              <label htmlFor='password' className='mt-8'>
                Password
              </label>
              <input id="password" type='password' placeholder='login' />
             </div>
              <p className='mt-4 mb-4 text-register'>
              don't have an account? register here.
              </p>
             <div className='flex justify-between'>
             <ActiveButton text={'Login'} action={true} exec={loginUser}/>
             <CancelButton text={'Cancel'} action={true} exec={cancelLogin}/>
             </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
