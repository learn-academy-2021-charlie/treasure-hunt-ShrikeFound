import React, { Component } from 'react'
import './App.css'
import Square from './components/Square'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      board: ["❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓"],
      treasureLocation: null,
      trapLocation: null
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
    
    
    this.setState({board: newBoard})
    }
  

  render(){
    const {board,treasureLocation,trapLocation} = this.state
    return(
      <>
        <h1>Treasure Hunt Game ({treasureLocation}/{trapLocation})</h1>
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
