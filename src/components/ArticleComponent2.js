import React from 'react';
import './ArticleComponent2.css';
import Tetris from './Tetris';

const ArticleComponent2 = () => {
  return (
    <div className="article">
      <h1>The History of Quantum Physics</h1>
      <img className ='pic1' src='images/Q1.webp' alt='shrodinger-cat'/>
      <p>
        Quantum physics, also known as quantum mechanics, is a fundamental theory in physics that describes the behavior of matter and energy at the smallest scales. It has a rich and intriguing history that has revolutionized our understanding of the universe.
      </p>
      <p>
        The journey of quantum physics began in the early 20th century with the work of pioneering scientists such as Max Planck, Albert Einstein, Niels Bohr, and Erwin Schrödinger. These scientists laid the groundwork for the theory by exploring the quantization of energy and the wave-particle duality of light and matter.
      </p>
      <p>
        One of the key breakthroughs was the development of the Schrödinger equation, which provided a mathematical framework for describing the behavior of quantum systems. This led to the discovery of quantum phenomena such as superposition and entanglement, which challenged classical notions of reality.
      </p>
      <p>
        The mid-20th century marked the emergence of quantum field theory, unifying quantum mechanics with special relativity and giving rise to the Standard Model of particle physics. This model describes the fundamental particles and forces that govern the universe.
      </p>
      <p>
        In recent decades, quantum physics has also led to the development of quantum computing, quantum cryptography, and the exploration of quantum entanglement for applications in various fields.
      </p>
      <p>
        In conclusion, the history of quantum physics is a tale of discovery, innovation, and paradigm shifts. It has reshaped our understanding of reality and continues to inspire new avenues of scientific exploration.
      </p>
      <Tetris/>
    </div>
  );
};

export default ArticleComponent2;

