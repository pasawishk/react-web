import React from 'react';
import './ArticleComponent2.css';
import Tetris from './Tetris';

const ArticleComponent2 = () => {
  const Superposition = () => (
    <div>
      <h2>Superposition</h2>
      <img src='images/Q2.png'/>
      <p>
        In Tetris, imagine a block that can exist in multiple states at once, like hovering above several rows simultaneously.
        This is similar to the concept of superposition in quantum mechanics. In quantum physics, particles like electrons can
        exist in multiple states simultaneously until measured.
      </p>
    </div>
  );
  
  const Entanglement = () => (
    <div>
      <h2>Entanglement</h2>
      <img src='images/Q3.jpeg'/>
      <p>
        Imagine playing Tetris on two separate screens, but the blocks on one screen are somehow connected to the blocks on
        the other screen. When you clear a line on one screen, the corresponding line on the other screen also clears, even
        if the blocks on the second screen seem unrelated. This interconnectedness is similar to quantum entanglement, where
        particles become correlated in a way that their states are dependent on each other, regardless of distance.
      </p>
    </div>
  );
  
  const QuantumTunneling = () => (
    <div>
      <h2>Quantum Tunneling</h2>
      <img src='images/Q4.jpeg'/>
      <p>
        In Tetris, you sometimes notice that a block can move through a gap that's narrower than the block itself. This is
        analogous to quantum tunneling, where particles can pass through energy barriers that classical physics would
        suggest are impenetrable.
      </p>
    </div>
  );
  
  const MeasurementAndCollapse = () => (
    <div>
      <h2>Measurement and Collapse</h2>
      <img src='images/Q5.gif'/>
      <p>
        When you finally decide to place a Tetris block, it "collapses" into a definite position and shape. Similarly, in
        quantum mechanics, when you measure a quantum state, it collapses from a superposition of possibilities into a
        definite state.
      </p>
    </div>
  );
  
  const UncertaintyPrinciple = () => (
    <div>
      <h2>Uncertainty Principle</h2>
      <img src='images/Q6.webp'/>
      <p>
        Imagine you're uncertain about the next Tetris block that will appear. The more certain you are about its shape,
        the less certain you'll be about where it will land, and vice versa. This mirrors Heisenberg's Uncertainty
        Principle in quantum mechanics, which states that you can't simultaneously know both the exact position and momentum
        of a particle with unlimited precision.
      </p>
    </div>
  );
  
  const QuantumTetrisArticle = () => (
    <div>
      <h1>Understanding Quantum Phenomena Through Tetris</h1>
      <Superposition />
      <Entanglement />
      <QuantumTunneling />
      <MeasurementAndCollapse />
      <UncertaintyPrinciple />
      <p>
        Remember, this analogy simplifies complex quantum concepts for the sake of understanding. While Tetris can provide
        a visual representation, quantum phenomena are much more intricate and often counterintuitive. Still, using familiar
        concepts like Tetris can help lay a foundation for grasping these abstract ideas.
      </p>
    </div>
  );

  return (
    <>
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
      <QuantumTetrisArticle/>
    </div>
    <Tetris/>
    </>
  );
};

export default ArticleComponent2;

