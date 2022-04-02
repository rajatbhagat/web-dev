import React, {useEffect} from 'react';
import TuitListItem from './tuit-list-item.js';
import './tuits.css';
import {useSelector, useDispatch} from "react-redux";
import * as service from '../service/tuit-service';
import {deleteTuit, findAllTuits} from "../actions/tuits-actions.js";

const TuitList = () => {
    const tuits = useSelector(state => state.tuits);
    const dispatch = useDispatch();
    useEffect(() => {
        findAllTuits(dispatch)
    }, [])
    return (
        <ul className="ttr-tuits list-group">
            {
                tuits.map && tuits.map((tuit) =>  {
                    return (
                        <div>
                            <TuitListItem key={tuit._id} tuit={tuit}/>
                            <i className="fas fa-remove float-end" onClick={() => deleteTuit(dispatch, tuit)}/>
                        </div>
                    );
                })
            }
        </ul>
    );

}

export default TuitList;