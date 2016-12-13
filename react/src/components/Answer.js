import React from 'react';

const Answer = ({ id, body, correct, onClick}) => {

  return(
    <div onClick={onClick}>
      {body}
    </div>
  )
}

export default Answer;
