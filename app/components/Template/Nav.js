import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import data from '../../data/contact';

const Nav = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${BASE_PATH}/images/profile pic.jpg`} alt="" />
      </Link>
      <header>
        <h2>Shekhar Dewan</h2>
        <p><a href="mailto:shekhar.dewan@gmail.com">shekhar.dewan@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Shekhar. I use code to solve problems.  
            I am a recent <a href="https://www.mta.ca/">Mount Allison</a> new grad (CS and Math) with internship and research experience.
      </p>
      <ul className="actions">
        <li>
          {window.location.pathname !== `${BASE_PATH}/resume` ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ul className="icons">
        {data.map((s) => (
          <li key={s.label}>
            <a href={s.link}>
              <FontAwesomeIcon icon={s.icon} />
            </a>
          </li>
        ))}
      </ul>
      <p className="copyright">&copy; Shekhar Dewan <Link to="/">mldangelo.com</Link>.</p>
    </section>
  </section>
);

export default Nav;
