// Code EyesOnMe Component Here
import React from "react";

function EyesOnMe() {
    function FocusHandler() {
      console.log('Good!');
    }
  
    function HandleBlur() {
      console.log('Hey! Eyes on me!');
    }

       
        return(

      <div>
        <button onFocus={FocusHandler} onBlur={HandleBlur}>Eyes on me</button>
        </div>

        
    )
}

export default EyesOnMe;

