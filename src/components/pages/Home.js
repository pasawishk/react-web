// import React, { useState, useEffect } from 'react';
// import styles from "./styles.module.css";
// import Battle from '../Battle/Battle.js';
// import { EndMenu } from '../EndMenu/EndMenu';
// import {StartMenu} from '../StartMenu/StartMenu';
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import Footer from '../Footer';
import ArticleComponent from '../ArticleComponent';

function Home() {
  // const [winner, setWinner] = useState();
  // const [mode, setMode] = useState('start');

  // useEffect(() => {
  //   if (mode === 'battle') {
  //     setWinner(undefined);
  //   }
  // }, [mode]);

  return (
    <>
      <HeroSection />
      <ArticleComponent/>

      {/* <div className={styles.main}>
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
      </div> */}
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
