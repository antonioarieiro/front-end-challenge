import React from 'react';
import './AccountOptions.scss';
export default function AccountOptions() {
  const options = ['Favoritos', 'Ultimos Acessos', 'Recentes'];
  return (
    <>
      <div className='container absolute mt-2 p-4 -ml-16'>
        {
          options.map((_value, key) => (
            <p className='p-2' key={key}>
              {_value}
            </p>
          ))
        }
      </div>
    </>
  );
}
