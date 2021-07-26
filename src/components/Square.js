import React, { Component } from 'react'

class Square extends Component{
  render(){
    const {handleClick,index,value} = this.props
    return(
      <div className="square" onClick={() => handleClick(index)}>
        {value}
      </div>

    )
  }
}
export default Square
