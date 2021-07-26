import React, { Component } from 'react'
import './App.css'
import Square from './components/Square'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      board: ["❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓"],
      treasureLocation: null
    }
  }

  componentDidMount(){
    let treasureLocation = Math.floor(Math.random() * this.state.board.length)
    this.setState({treasureLocation: treasureLocation})
  }


  handleClick = (index) =>{

    const newBoard = [...this.state.board]
    if(index === this.state.treasureLocation){
      newBoard[index] = "💎"
    }else{
      newBoard[index] = "🌴"
    }
    
    
    this.setState({board: newBoard})
    }
  

  render(){
    const {board,treasureLocation} = this.state
    return(
      <>
        <h1>Treasure Hunt Game ({treasureLocation})</h1>
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
