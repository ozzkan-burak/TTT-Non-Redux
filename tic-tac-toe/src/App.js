import React, { Component } from 'react';
import './base.css';

class App extends Component {

  state = {
    turn:"X",
    gameEnd:false,
    board:Array(9).fill(''),
    totalMove:0,
    winner:''
  }

  handleClick(e){
    if(this.state.gameEnd == true) return;
   
    if(this.state.board[e.target.dataset.sqr]=='') {
      this.state.board[e.target.dataset.sqr]=this.state.turn;

      e.target.innerText=this.state.turn;

      this.setState({
        turn:this.state.turn == 'X' ? 'O' : 'X',
        board: this.state.board,
        totalMove:++this.state.totalMove
      });
    }

    var gameResult = this.winControl();

    if(gameResult == 'X'){
      this.setState({
        gameEnd:true,
        winner:'Kazanan X',
      })
      
    }else if(gameResult == 'O'){

      this.setState({
        gameEnd:true,
        winner:'Kazanan O',
      })
      
    }else if(gameResult == 'Beraberlik'){
      this.setState({
        gameEnd:true,
        winner:'Kazanan Yok, Berabere'
      })
    }  

  }

  

  winControl () {
    const board= this.state.board;
    let winMoves= [[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6],[0,1,2],[3,4,5],[6,7,8]];

    for (let i =0; i < winMoves.length; i++){
      if(board[winMoves[i][0]]==board[winMoves[i][1]] && board[winMoves[i][1]]==board[winMoves[i][2]]){
        return board[winMoves[i][0]]
      }
    }
    if (this.state.totalMove == 9){
      return 'Beraberlik'
    }
  }

  render() {
    return (
      <div className="App">
        <div id="game" className="game">
          
          <div id="head" className="head">
            Tic Tac Toe Game
          </div>
          <div id="board" className="board" onClick={(e=> this.handleClick(e))}>
            <div className="sqr" data-sqr="0"></div>
            <div className="sqr" data-sqr="1"></div>
            <div className="sqr" data-sqr="2"></div>
            <div className="sqr" data-sqr="3"></div>
            <div className="sqr" data-sqr="4"></div>
            <div className="sqr" data-sqr="5"></div>
            <div className="sqr" data-sqr="6"></div>
            <div className="sqr" data-sqr="7"></div>
            <div className="sqr" data-sqr="8"></div>
          </div>
          <div id="gameStatus" className="gameStatus">{this.state.winner}</div>
        </div>
      </div>
    );
  }
}

export default App;
 