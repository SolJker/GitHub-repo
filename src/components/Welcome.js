import React from "react";

function Welcome(props) {

  return (

    <div id="welcome">
      <p onClick={props.changeStyles} className='welcome_text'>Добро пожаловать</p>
    </div>
  );
}

export default Welcome;