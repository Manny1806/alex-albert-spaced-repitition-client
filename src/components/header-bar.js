import React from 'react';

import '../styles/float-grid.css';
import '../styles/header-bar.css';

export function HeaderBar(props) {
  return (
    <header role="banner">
      <div className="row">
        <section className="col-12 box">
          <img className="logo" src={require('../images/logo.png')} alt="Pokémon Learning Center logo."/>
        </section>
      </div>
    </header>
  );
}

export default HeaderBar;
