import React, { Component } from 'react'
import './App.css'
import Square from './components/Square'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      board: ["❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓"]
    }
  }

  handleClick = (index) =>{
    const newBoard = [...this.state.board]
    newBoard[index] = "🌴"
    this.setState({board: newBoard})
    }
  

  render(){
    const {board} = this.state
    return(
      <>
        <h1>Treasure Hunt Game</h1>
        <div className="board">
        {board.map(((square,index) => {
          return <Square key={index} index={index} value={square} handleClick={this.handleClick}/>
        }))}
        </div>
      </>
    )
  }
}
export default App
