import React from 'react';
import { useState } from 'react';

function TTH(){
    const [count,setCount]= useState(0);
    const Cell = (props) => <div className= "Cell" onMouseEnter={()=>props.onMouseEnter(props.cellNum)}>{props.val}</div>
    
    const Board = (props) => {
        const initData ={
            cells: Array.apply(null, {length:9}).map(x => ''),
            symbl: 'X'
    }
    const [cells,setCells] = React.useState(initData.cells)
    const [symbl,setSymbl] = React.useState(initData.symbl)

    const tttStates = [
        '111000000'
        '000111000'
        '000000111'
        '100100100'
        '010010010'
        '001001001'
        '100010001'
        '001010100'
    ]

    const moveBitmap = (symbl) => cells.map(x => x === symbl? 1: 0). join('') 

    const checkWinner = (symbl) => {
        for (let i of tttStates){
        if ((parseInt(moveBitmap(symbl), 2) & parseInt(i, 2)) == parseInt(i, 2)) {
            alert(`${symbl} won! New Game?`)
            newGame()
          }
        }
    }
    const clicked = (x) =>{
        const newCellData = Array (...cells)
        if (!newCellData[x]){
            newCellData[x] = Symbl 
            setCells = (newCellData)
            setSymbl(symbl=== 'X' ? 'O' : 'X')
        }
    }
    const rCells= []
        for (i=0; i<9; i++){
            rCells.push(<Cell val={cells[i]} cellNum{i} clicked={clicked} />)
        }
    const = NewGame = () => {
        setCells(initData.cells)
        setSymbl(initData.symbl)
    } 

    React.useEffect(() => checkWinner(symbl === 'X' ? 'O' : 'X'))

    return (
        <div className="Game">
            <div className="Board">
                {rCells}
            </div>
                <p> Next Player Move! {Symbl} </p>
                <button onClick={NewGame}>New Game</button>
        </div>
    );

}

  
}

export default TTH;