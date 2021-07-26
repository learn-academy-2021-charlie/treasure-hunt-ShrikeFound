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
      gameOver: false
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

    
    this.setState({board: newBoard,counter: this.state.counter-1,gameOver: this.gameOver()})
  }

  gameOver = () =>{
    //check to see if game is won or lost.
    console.log("checking win condition...")
    //losing conditions: either counter is at 0 or the bomb has been found.
    if(this.state.counter <= 0 || this.state.board.includes(this.state.lossEmoji)){
      console.log("lose")
      return true
    }else if(this.state.board.includes(this.state.winEmoji)){
      return true
    }

    return false


    //win conditions: gem found
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
