import React from 'react';
import './AccountOptions.scss';
export default function AccountOptions(props) {
  const { setIsUser } = props
  const options = ['Favoritos', 'Ultimos Acessos', 'Recentes', 'Sair'];
  return (
    <>
      <div className='container absolute mt-2 p-4 -ml-16'>
        {
          options.map((_value, key) => (
            <p className='p-2' key={key} onClick={() => { _value === 'Sair' && setIsUser([])}}>
              {_value}
            </p>
          ))
        }
      </div>
    </>
  );
}
