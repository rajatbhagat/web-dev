import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import './whats-happening.css';
import {createTuit} from "../actions/tuits-actions";

const WhatsHappening = () => {
    // let [whatsHappening, setWhatsHappening] = useState("");
    const defaultTuit = {
        _id: (new Date()).getTime() + '',
        postedBy: {
            "username": "Rajat Bhagat"
        },
        handle: "rajatbhagat",
        logoImage: "/tuiter/images/profilePicture.png",
        stats: {
            retuits: 111,
            likes: 222,
            replies: 333,
            dislikes: 10
        }
    }
    const [newTuit, setNewTuit] = useState({tuit: 'New tuit', ...defaultTuit});
    const dispatch = useDispatch();
    return (
      <div className="row mt-2 mb-3">
          <div className="col-3">
              <img src = {window.location.origin + "/tuiter/images/profilePicture.png"} className="wd-round-whats-happeneing"/>
          </div>
          <div className="col-9">
              <div className="row wd-occupy-all-width">
                  <textarea className="float-end form-control bg-black text-white wd-text-color" rows="4" placeholder="What's Happening ?" onChange={
                      (e) => setNewTuit({...newTuit, tuit: e.target.value})
                  }/>
              </div>
              <div className="row">
                  <div className="mt-2">
                      <i className="fa fa-image  wd-margin-right-icons"/>
                      <i className="fa fa-chart-line  wd-margin-right-icons"/>
                      <i className="fa fa-smile-o   wd-margin-right-icons "/>
                      <i className="fa fa-calendar  wd-margin-right-icons"/>
                      <button className="float-end btn btn-primary text-white wd-whats-happening-button-rounded"
                              onClick={() => {
                                  // console.log(newTuit)
                                  createTuit(dispatch, newTuit)
                              }}><strong>Tuit</strong></button>
                  </div>
              </div>
          </div>
      </div>
    );
}

export default WhatsHappening;