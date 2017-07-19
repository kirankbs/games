import { Component } from 'react'
import { Board } from './Board'
import { Players, Player, PlayerColors } from './Players'
import '../stylesheets/style.scss'
import { AddPlayerForm, DeletePlayer } from './PlayerForm'
import { roll } from "./Dice"


export class Game extends Component{
    constructor(){
        super();
        this.state = {
            playerColors: PlayerColors(),
            players: [],
            addPlayerFormVisibility: false,
            delPlayerFormVisibility: false,
            showAddPlayerForm: () => this.showAddPlayerForm(true),
            showDelPlayerForm: () => this.showDelPlayerForm(true),
        };
    }

    addPlayer = (player) => this.setState(prevState => ({
        players: [...prevState.players, player]
    }))
    
    showAddPlayerForm = (status) => this.setState({ addPlayerFormVisibility: status });

    delPlayer = (name) => 
        this.setState(prevState => ({ 
            players: prevState.players.filter(p => p.props.name != name)
        }));

    showDelPlayerForm = (status) => this.setState({ delPlayerFormVisibility: status });

    play = (prevState) => {
        const [first, ...tail] = prevState.players;
        const {name, icon, level, pos } = first.props;
        const newPos = roll() + pos;
        const newPlayer = 
            <Player name={name} 
                    level={level} 
                    icon = { icon } 
                    key={ name } 
                    pos = { newPos } 
                     />
        return [...tail, newPlayer]
    }

    playPlayer = () => this.setState(prevState => ({
        players: this.play(prevState)
    }))


    render(){
        return(
            <div>
                <Board players={this.state.players} />
                <br/>
                <Players {...this.state} />
                <AddPlayerForm  addPlayer = {this.addPlayer} 
                                playerColors={this.state.playerColors}
                                showAddPlayerForm={this.showAddPlayerForm}
                                addPlayerFormVisibility={this.state.addPlayerFormVisibility}/>
                <DeletePlayer   delPlayer = { this.delPlayer } 
                                showDelPlayerForm = { this.showDelPlayerForm }
                                delPlayerFormVisibility = { this.state.delPlayerFormVisibility }/>
                <br/>
                {
                    (this.state.players.length) 
                    ? <div className="roll-dice-btn">
                        <span>{this.state.players[0].key}</span>
                        <button  onClick = { this.playPlayer }>
                        ROLL Dice
                        </button>
                    </div>
                    : null
                }
            </div>
        )
    }
}

/* 
    Spread Operator
    Default State at constructor
    react-icons
    array destructuring as head and tail
    array spread operator
*/
