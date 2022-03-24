import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import './whats-happening.css';

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
      <div className="row mt-2 mb-3">
          <div className="col-3">
              <img src = {window.location.origin + "/tuiter/images/profilePicture.png"} className="wd-round-whats-happeneing"/>
          </div>
          <div className="col-9">
              <div className="row wd-occupy-all-width">
                  <textarea className="float-end form-control bg-black text-white wd-text-color" rows="4" placeholder="What's Happening ?" value={whatsHappening} onChange={(event => {
                      setWhatsHappening(event.target.value)
                  })}/>
              </div>
              <div className="row">
                  <div className="mt-2">
                      <i className="fa fa-image  wd-margin-right-icons"/>
                      <i className="fa fa-chart-line  wd-margin-right-icons"/>
                      <i className="fa fa-smile-o   wd-margin-right-icons "/>
                      <i className="fa fa-calendar  wd-margin-right-icons"/>
                      <button className="float-end btn btn-primary text-white wd-whats-happening-button-rounded"
                              onClick={onTuitButtonClickHandler}><strong>Tuit</strong></button>
                  </div>
              </div>
          </div>
      </div>
    );
}

export default WhatsHappening;