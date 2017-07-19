import { Component } from 'react'
import '../stylesheets/style.scss'
import { PlayerIcon, Player } from './Players'

export const AddPlayerForm = ({ playerColors, 
                                addPlayerFormVisibility, 
                                showAddPlayerForm, 
                                addPlayer }) =>  {

    let _name;
    const onSubmit = (e) => {
        e.preventDefault();
        const color = playerColors.next().value;
        const name = _name.value; 
        const icon = <PlayerIcon color = {color} key={name} />;
        addPlayer(
            <Player name={name} level="beginner" icon = { icon } key={ name } pos = {1} />
        );
        showAddPlayerForm(false);     
    }    
    return(
            (addPlayerFormVisibility) ?
            <form onSubmit={onSubmit} id="add-player" className="player-form">
                <h3>ADD Player</h3>
                <input  type="text" 
                        defaultValue="" 
                        required 
                        ref={ input => _name = input }/>
                <button> Save </button>
            </form> : null
            
        )
    }

export const DeletePlayer = ({ delPlayer, delPlayerFormVisibility, showDelPlayerForm }) => {

    let _name;
    const onSubmit = (e) => {
        e.preventDefault();
        const name = _name.value;
        delPlayer(name);
        showDelPlayerForm(false); 
    }
    const retrieveNametoDelete = e => this.setState({ name: e.target.value });
    
    return(
            (delPlayerFormVisibility) ?
            <form onSubmit={onSubmit} id="del-player" className="player-form">
                <h3>Delete Player</h3>                
                <input  type="text"
                        defaultValue=""
                        ref={ input => _name = input}
                        required/>
                <button> Delete </button>
            </form> : null
        )
    }