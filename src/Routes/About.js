import React, { useContext } from 'react';
import { Context, ContextTimer } from '../Hooks/Context';
import Timers from '../Components/Timers';

const About = function () {
  const {
    numbers, setNumbers, todos, setTodos,
  } = useContext(ContextTimer);
  const { setTitle } = useContext(Context);
  Timers(numbers, setNumbers, todos, setTodos);
  setTitle('Know me...');
  return (
    <div className="About">
      <div className="Item">
        <div className="Image">
          <img src="foto.jpg" alt="Product" />
        </div>
        <div className="Detail">
          <h1>Jorge Daniel Quintero</h1>
          <div className="SubDetail">
            <div className="description">
              <p>
                I am a junior programmer in web design focused on backend and
                frontend, I handle a variety of programming languages and I
                believe I can solve any problem that comes up.
              </p>
              <p>I have learned many things in this course such as:</p>
              <p>
                <ul>
                  <li>basic and advanced algorithm in javascript</li>
                  <li>group work for production with methods such as scrum</li>
                  <li>web design with tools like css, react, nodejs, etc</li>
                </ul>
              </p>
            </div>
            <div className="data">
              <p>email: jodaquin02@gmail.com</p>
              <p>
                {'Github: '}
                <a
                  href="https://www.github.com/Jorgeosky"
                  target="_blank"
                  rel="noreferrer"
                >
                  github.com/Jorgeosky
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
