import React from 'react';
import './Board.css';
import Doggo from './Doggo';
import Reactive from './Reactive';

import { COLUMNS, ROWS } from '../GameState';

function Tile({ current, coordinates, mines }) {
  // var dog=0;
  if (current.row === coordinates.row && current.column === coordinates.column) {
    // dog+=1;
    // console.log('dog:'+ dog)
    return <Doggo></Doggo>;
  }
  // var reactive=0;
  if (mines[coordinates.row][coordinates.column] === 1) {
    // reactive+=1;
    // console.log(reactive);
    return <Reactive></Reactive>;
  }
  // return reactive;
  return "";
}

function Board({ current, mines }) {

  return (
    <table className="Board-table">
      <tbody>
        {
          Array.from(Array(ROWS)).map((_, row) =>
            <tr key={'pos' + row}>
              {
                Array.from(Array(COLUMNS)).map((_, column) =>
                  <td key={'pos' + row + '_' + column}>
                    <Tile coordinates={{ row, column }} current={current} mines={mines}></Tile>
                  </td>
                )
              }
            </tr>
          )
        }
      </tbody>
    </table>
  );
}

export default Board;
