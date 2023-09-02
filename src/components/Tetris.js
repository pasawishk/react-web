import React, { useState } from 'react';
import './Tetris.css';

import { createStage, checkCollision } from '../gameHelpers';

// Styled Components
import { StyledTetrisWrapper, StyledTetris } from './styles/StyledTetris';

// Custom Hooks
import { usePlayer } from '../hooks/usePlayer';
import { useStage } from '../hooks/useStage';
import { useInterval } from '../hooks/useInterval';
import { useGameStatus } from '../hooks/useGameStatus';

// Components
import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';

const Tetris = () => {
  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  

  const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer();
  const [stage, setStage, rowsCleared] = useStage(player, resetPlayer);
  const [score, setScore, rows, setRows, level, setLevel] = useGameStatus(rowsCleared);

  console.log('re-render');

  const movePlayer = dir => {
    if (!checkCollision(player, stage, { x: dir, y: 0 })) {
      updatePlayerPos({ x: dir, y: 0 });
    }
  }

  const startGame = () => {
    console.log("test")
    // Reset everything
    setStage(createStage());
    resetPlayer();
    setGameOver(false);
    setDropTime(1000);
    setScore(0);
    setRows(0);
    setLevel(0);
  }

  const drop = () => {
    if(rows > (level+1)*10) {
      setLevel(prev => prev+1);
      setDropTime(1000/(level+1)+200);
    }

    if (!checkCollision(player, stage, { x: 0, y: 1 })) {
      updatePlayerPos({ x: 0, y: 1, collided: false })
    } else {
      // Game Over
      if (player.pos.y < 1) {
        console.log("GAME OVER!!!");
        setGameOver(true);
        setDropTime(null);
      }
      updatePlayerPos({ x: 0, y: 0, collided: true });
    }
  }

  const keyUp = ({ keyCode }) => {
    if (!gameOver){
      if(keyCode === 40) {
        console.log('interval on')
        setDropTime(1000/(level+1)+200);
      }
    }
  }

  const dropPlayer = () => {
    console.log('manual drop');
    drop();
  };

  const move = ({ keyCode }) => {
    if (!gameOver) {
      if (keyCode === 65) {
        movePlayer(-1);
      } else if (keyCode === 68) {
        movePlayer(1);
      } else if (keyCode === 83) {
        dropPlayer();
      }else if (keyCode === 87) {
        playerRotate(stage,1);
      }
    }
  }

  useInterval(() => {
    drop();
  },dropTime)

  return (
    <div className='tetris'>
    <StyledTetrisWrapper role="button" tabIndex="0" onKeyDown={e => move(e)} onKeyUp={keyUp}>
      <StyledTetris>
        <Stage stage={stage} />
        <aside>
          {gameOver ? (
            <Display gameOver={gameOver} text="Game Over" />
          ) : (
            <div>
              <Display text={`Score: ${score}`} />
              <Display text={`Rows: ${rows}`} />
              <Display text={`Level : ${level}`} />
            </div>
          )}
          <StartButton callback={startGame} />
          <div className='instruction'>
     control using WASD
  </div>
          <div className="mobile-button-container">
          <button className="mobile-button" onClick={() => playerRotate(stage, 1)}>Rotate</button>
  </div>
  <div className="mobile-button-container">
    <button className="mobile-button left larger-font" onClick={() => movePlayer(-1, 0)}>←</button>
    <button className="mobile-button down larger-font" onClick={dropPlayer}>↓</button>
    <button className="mobile-button right larger-font" onClick={() => movePlayer(1, 0)}>→</button>
  </div>
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
    </div>
  );
};

export default Tetris;
