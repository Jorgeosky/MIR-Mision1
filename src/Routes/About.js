import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function About() {
  const { state } = useLocation();
  const element = (
    <div className="About">
      <navbar className="Navegation">
        <ul>
          <Link
            to="/"
            state={{ timeres: state.timeres, position: state.position }}
            className="Link"
          >
            <li>Home</li>
          </Link>
          <li>Know me...</li>
          <Link
            to="/About"
            state={{ timeres: state.timeres, position: state.position }}
            className="Link"
          >
            <li>About</li>
          </Link>
        </ul>
      </navbar>
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
  return element;
}

export default About;
