import {Component} from "react"
import '../stylesheets/style.scss'
import User from 'react-icons/lib/ti/user'
import "babel-polyfill"
import UserAdd from 'react-icons/lib/ti/user-add'
import UserDel from 'react-icons/lib/ti/user-delete'

export const Player = (props) => (
            <div className="player">
                {props.icon}
                <div>Name: {props.name}</div>
                <div>Level: {props.level}</div>
            </div>
        )

export const Players = ({showDelPlayerForm, showAddPlayerForm, players}) => (
                <div className="player-details">
                    {players}
                    <button className="addPlayer-btn" onClick={showAddPlayerForm } ><UserAdd size={25}/></button>
                    <button className="delPlayer-btn" onClick={showDelPlayerForm }><UserDel size={25}/></button>
                </div>
)

export const PlayerIcon = (props) => (
    <User color={props.color }/>
)

export function* PlayerColors() {
    yield "red";
    yield "green";
    yield "blue";
    yield "yellow";
    yield "black";
    yield "orange";
    yield "grey";
}

/** Generator 
 * 
*/
