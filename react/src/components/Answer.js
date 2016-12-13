import React from 'react';

const Answer = ({ id, body, correct, onClick}) => {

  return(
    <div onClick={onClick} id={id}>
      <p>
      {body}
      </p>
    </div>
  )
}

export default Answer;
