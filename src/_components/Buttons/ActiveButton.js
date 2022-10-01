import React from 'react';
import './Buttons.scss';
export default function ActiveButton(props) {
  const { text, action, exec } = props;
  return (
    <>
      <button
        onClick={() => {
          action && exec()
        }}
        className='active-btn'
      >
        {text}
      </button>
    </>
  );
}
