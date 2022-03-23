import React, {useState} from 'react';
import {useDispatch} from "react-redux";

const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening] = useState("");
    const dispatch = useDispatch();
    const onTuitButtonClickHandler = () => {
        dispatch({
            type: 'CREATE_TUIT',
            tuit: whatsHappening
        })
    }
    return (
      <div>
          <textarea value={whatsHappening} onChange={(event => {
              setWhatsHappening(event.target.value)
          })}/>
          <button onClick={onTuitButtonClickHandler}>Tuit</button>
      </div>
    );
}

export default WhatsHappening;