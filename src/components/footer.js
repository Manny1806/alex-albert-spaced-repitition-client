import React from 'react';

import '../styles/float-grid.css';
import '../styles/footer.css';

export function Footer(props) {
  return (
    <footer>
    <div className="row">
      <section className="col-4 box">
        <ul><h2>Meet the creators!</h2>
          <li><a target="_blank" rel="noopener noreferrer" href="https://albert-sare.netlify.com">Albert Sare</a></li>
          <li><a target="_blank" rel="noopener noreferrer" href="http://alex-widner.surge.sh/">Alex Widner</a></li>
        </ul>
      </section>
      <section className="col-4 box">
        <ul><h2>GitHub</h2>
          <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/thinkful-ei21/alex-albert-spaced-repitition-client">Client Repo</a></li>
          <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/thinkful-ei21/alex-albert-spaced-repitition-server">Server Repo</a></li>
      </ul>
      </section>
      <section className="col-4 box">
        <h2>About</h2>
        <p>This app is powered by HTLM, CSS, JavaScript, React, Redux, Node, and Express.</p>
        <p>Pokémon and Pokémon character names are trademarks of Nintendo. Other trademarks are the property of their respective owners.</p>
      </section>
    </div>
  </footer>
  );
}

export default Footer;
