// Code Keypad Component Here
import React from "react";

function Keypad (){
    
        function ChangeHandler(){
            console.log('Entering password...')
        }

    
    return (
        <div>
            <input type="password" onChange={ChangeHandler}></input>
        </div>
    )
}

export default Keypad;