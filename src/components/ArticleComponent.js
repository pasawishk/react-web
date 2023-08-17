import React, { useState, useEffect } from 'react';
import './ArticleComponent.css';
import styles from "./styles.module.css";
import Battle from './Battle/Battle';
import { EndMenu } from './EndMenu/EndMenu';
import {StartMenu} from './StartMenu/StartMenu';

const ArticleComponent = () => {
  const [winner, setWinner] = useState();
  const [mode, setMode] = useState('start');

  useEffect(() => {
    if (mode === 'battle') {
      setWinner(undefined);
    }
  }, [mode]);
  return (
    <>
    <div className="article-container">
      <h1>The History of Quantum Physics and Einstein's Relationship</h1>
      <p>
        Quantum physics, a fundamental branch of science, deals with the behavior of
        particles at the tiniest scales. Albert Einstein, a renowned physicist, had a
        complex relationship with this revolutionary theory.
      </p>
      <p>
        While Einstein is famous for his theory of relativity, his views on quantum
        mechanics were different. He famously remarked, "God does not play dice with the
        universe," expressing his discomfort with the theory's probabilistic nature.
      </p>
      </div>
      <div className={styles.main}>
        {mode === 'start' && (
          <StartMenu onStartClick={() => setMode('battle')} />
        )}

        {mode === 'battle' && (
          <Battle
            onGameEnd={winner => {
              setWinner(winner);
              setMode('gameOver');
            }}
          />
        )}

        {mode === 'gameOver' && !!winner && (
          <EndMenu winner={winner} onStartClick={() => setMode('battle')} />
        )}
      </div>
      <div className="article-container">
      <p>
        In 1935, Einstein, along with Boris Podolsky and Nathan Rosen, published the
        EPR paper, challenging the prevailing Copenhagen interpretation. They proposed
        the EPR paradox, suggesting hidden variables could determine outcomes
        deterministically.
      </p>
      <p>
        However, physicist John Bell's inequalities, formulated in 1964, showed that
        quantum mechanics' predictions violated bounds set by deterministic hidden
        variables. This challenged Einstein's stance and highlighted the non-local and
        probabilistic nature of quantum interactions.
      </p>
      <p>
        Despite Einstein's skepticism, his contributions to the photoelectric effect and
        wave-particle duality are significant. His debates with physicists like Niels
        Bohr sparked profound discussions about the philosophy behind quantum mechanics.
      </p>
    </div>
    </>
  );
};

export default ArticleComponent;
