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
      counter: 5,
      neutralEmoji: "🌴",
      lossEmoji: "💣",
      winEmoji: "💎",
      gameOver: false,
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
    if (this.state.gameOver) return

    const newBoard = [...this.state.board]
    if(index === this.state.treasureLocation){
      newBoard[index] = "💎"
    }else if(index === this.state.trapLocation){
      newBoard[index] = "💣"
    }else{
      newBoard[index] = "🌴"
    }
    const newCounter = this.state.counter - 1 
    const gameState = this.gameOver(newBoard,newCounter);

    this.setState({board: newBoard,counter: newCounter, gameOver: gameState})

  }

  gameOver = (board,counter) =>{
    //check to see if game is won or lost.
    console.log("checking win condition...")
    //losing conditions: either counter is at 0 or the bomb has been found.
    if(counter <= 0 || board.includes(this.state.lossEmoji)){
      return "lose"
      //win conditions: gem found
    }else if(board.includes(this.state.winEmoji)){
      return "win"
    }

    return false


  
  }

  

  render(){
    const {board,treasureLocation,trapLocation,counter,gameOver} = this.state
    console.log(this.state)
    return(
      <>
        <h1>Treasure Hunt Game ({treasureLocation}/{trapLocation})</h1>
        <p>Click on a square to make a guess. You have 5 guesses to click on the treasure square, but beware the bomb square.</p>
        <div className="board">
        {board.map(((square,index) => {
          return <Square key={index} index={index} value={square} handleClick={this.handleClick}/>
        }))}
        </div>
        <h3>{gameOver ? `Game over. you ${gameOver}!`: `you have ${counter} guesses left.`}</h3>

      </>
    )
  }
}
export default App
