import React from 'react';
import './Buttons.scss';
export default function CancelButton(props) {
  const { text, action, exec } = props;
  return (
    <>
      <button
        onClick={() => {
          action && exec()
        }}
        className='cancel-btn'
      >
        {text}
      </button>
    </>
  );
}
