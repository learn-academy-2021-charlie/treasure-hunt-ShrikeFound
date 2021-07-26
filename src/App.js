import React, { Component } from 'react'
import './App.css'
import Square from './components/Square'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      board: ["❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓"],
      treasureLocation: null,
      trapLocation: null,
      counter: 5
    }
  }

  componentDidMount(){
    let treasureLocation = Math.floor(Math.random() * this.state.board.length)
    let trapLocation = null 
    do{
      trapLocation = Math.floor(Math.random() * this.state.board.length)
    }while(trapLocation === treasureLocation)
    this.setState({treasureLocation: treasureLocation, trapLocation: trapLocation})
  }


  handleClick = (index) =>{

    const newBoard = [...this.state.board]
    if(index === this.state.treasureLocation){
      newBoard[index] = "💎"
    }else if(index === this.state.trapLocation){
      newBoard[index] = "💣"
    }else{
      newBoard[index] = "🌴"
    }
    
    
    this.setState({board: newBoard,counter: this.state.counter-1})
    }
  

  render(){
    const {board,treasureLocation,trapLocation,counter} = this.state
    return(
      <>
        <h1>Treasure Hunt Game ({treasureLocation}/{trapLocation})</h1>
        <p>Click on a square to make a guess. You have 5 guesses to click on the treasure square, but beware the bomb square.</p>
        <p>you have {counter} guesses left.</p>
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
