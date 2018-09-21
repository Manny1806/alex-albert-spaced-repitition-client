import React from 'react';

import '../styles/float-grid.css';

export function Title(props) {
  return (
    <header role="banner">
      <div className="row">
        <section className="col-12 box">
          <h1>Pokémon Learning Center</h1>
        </section>
      </div>
    </header>
  );
}

export default Title;
