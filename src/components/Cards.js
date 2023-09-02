import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these Articles!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src='images/img-9.jpeg'
              text= "Dive into the mysteries of wave-particle duality"
              label= "Quantum Mechanics"
              path='/services'
            />
            <CardItem
              src='images/img-2.pbm'
              text='Unlocking the secrets of entanglement and teleportation'
              label='Quantum Phenomena'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpeg'
              text='The quantum computing revolution: A glimpse into the future'
              label='Quantum Computing'
              path='/services'
            />
            <CardItem
              src='images/img-4.avif'
              text='Einstein vs. Bohr: The historic debate on quantum physics'
              label='Quantum Theory'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpeg'
              text='Quantum gravity: Bridging the gap between quantum mechanics and general relativity'
              label='Quantum Gravity'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
