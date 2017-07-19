import { Component } from 'react'
import { App } from './App'
import { Game } from "./Game"
import { BrowserRouter , Route, hashHistory } from 'react-router-dom'

export class Main extends Component{
    render(){
        return(
            <BrowserRouter history={ hashHistory }>
                <App />
            </BrowserRouter>
        )
    }
}