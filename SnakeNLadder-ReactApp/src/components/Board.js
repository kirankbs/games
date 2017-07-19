import {Component} from "react"
import '../stylesheets/style.scss'
import { range } from '../JsUtils'
import { PlayerIcon, Player } from './Players'
import { Cell } from './Cell'


export const Board = (props) => 
    (             
        <div className="board-container">
            <header className="board-header">Board</header>
            <section className="board-section">
                { 
                    range(1,100).map(createCell(props)) 
                }
            </section>
        </div>
    )

const createCell = props => n => {
    const canPlayerLocate = ({props}) => n == props.pos
    const extractIcon = ({props}) => props.icon
    return <Cell 
        n={n} 
        key={n} 
        playerIcons = { props.players.filter(canPlayerLocate).map(extractIcon) }/>
}

/** currying */
