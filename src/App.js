import React from 'react';
import Board from './Board/Board';
import { board, ROWS, COLUMNS } from './GameState';

import './App.css';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      current: board.current,
      mines: board.mines,
      count: 0
    };
  }

  __div;

  handleOnKeyDown = (e) => {
    const current = {
      row: this.state.current.row,
      column: this.state.current.column,
    };

    const mines = this.state.mines;

    if (!['ArrowRight', 'ArrowLeft', 'ArrowUp', 'ArrowDown'].includes(e.key)) {
      return;
    }

    if (e.key === 'ArrowRight') {
      current.column++;
    } else if (e.key === 'ArrowLeft') {
      current.column--;
    } else if (e.key === 'ArrowUp') {
      current.row--;
    } else if (e.key === 'ArrowDown') {
      current.row++;
    }

    if (current.row >= ROWS) {
      current.row = ROWS - 1;
    } else if (current.row < 0) {
      current.row = 0;
    }

    if (current.column >= COLUMNS) {
      current.column = COLUMNS - 1;
    } else if (current.column < 0) {
      current.column = 0;
    }

  
    if(mines[current.row][current.column] === 1){
      var countmore= this.state.count +1;
      var copy = mines;
      copy[current.row][current.column] = 0;
      this.setState({count:countmore});
      this.setState({ mines:copy });
      console.log(this.state.count);
    }

    if(this.state.count == 7){
      alert("Ganaste!")
    }
    // TODO: Did Corgi stepped in a Reactive material?

    this.setState({ current, mines });
    e.preventDefault();
  };

  componentDidMount() {
    this.__div.focus();

  }

  

  render() {
    return (
      <div className="App" onKeyDown={this.handleOnKeyDown} tabIndex={0} autoFocus ref={c => (this.__div = c)}>
        <header className="App-header">
          <div>
            Movement: &larr; &uarr; &darr; &rarr;
          </div>

        </header>
        <div className="App-board">
          <Board current={this.state.current} mines={this.state.mines}></Board>
          {/* <Tiles current={{this.state.current.column,this.state.current.row}} mines={} coordinates={} /> */}
        </div>
      </div>
    );
  }
}

export default App;
