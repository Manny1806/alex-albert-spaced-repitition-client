import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/float-grid.css';
import '../styles/landing-page.css';

export function LandingPage(props) {
  return (
    <main className="landing-page" role="main">
      <article className="intro">
        <div className="row">
          <section className="col-6 box">
            <h1>LET'S GO!</h1>
            <hr />
            <p>With the release of Pokémon Let's Go Pikachu and Pokémon Let's Go Eevee, the craze of this time-honored franchise will once again take the world by storm. So why not learn the names of a few very popular Pokémon!</p>
            <p>This learning center uses an algorithm to help memorize names via spaced-repetition guessing. The user's guess history will determine which Pokémon should be reviewed.</p>
          </section>
          <section className="col-6 box">
            <img src="https://raw.githubusercontent.com/thinkful-ei21/alex-albert-spaced-repitition-client/master/src/screenshots/quiz-page.png" alt="Pokémon Learning Center screenshot." />
          </section>
        </div>
      </article>

      <article className="featured">
        <div className="row">
          <section className="col-12 box">
            <h1>FEATURED POKÉMON</h1>
            <hr />
            <h2>Here are our picks for a few popular and easy-to-remember Pokémon.</h2>
          </section>
        </div>
        <div className="row">
          <section className="col-6 box">
            <img src="https://cdn.bulbagarden.net/upload/thumb/0/0d/025Pikachu.png/1200px-025Pikachu.png" alt="Pikachu."/>
            <p>Pikachu</p>
          </section>
          <section className="col-6 box">
            <img src="https://cdn.bulbagarden.net/upload/thumb/e/e2/133Eevee.png/1200px-133Eevee.png" alt="Eevee."/>
            <p>Eevee</p>
          </section>
        </div>
        <div className="row">
          <section className="col-3 box">
            <img src="https://cdn.bulbagarden.net/upload/7/73/004Charmander.png" alt="Arcanine."/>
            <p>Charmander</p>
          </section>
          <section className="col-3 box">
            <img src="https://cdn.bulbagarden.net/upload/thumb/2/21/001Bulbasaur.png/1200px-001Bulbasaur.png" alt="Bulbasaur."/>
            <p>Bulbasaur</p>
          </section>
          <section className="col-3 box">
            <img src="https://cdn.bulbagarden.net/upload/3/39/007Squirtle.png" alt="Magikarp."/>
            <p>Squirtle</p>
          </section>
          <section className="col-3 box">
            <img src="https://cdn.bulbagarden.net/upload/3/3e/039Jigglypuff.png" alt="Jigglypuff."/>
            <p>Jigglypuff</p>
          </section>
        </div>
        <div className="row">
          <section className="col-3 box">
            <img src="https://cdn.bulbagarden.net/upload/2/2a/104Cubone.png" alt="Cubone."/>
            <p>Cubone</p>
          </section>
          <section className="col-3 box">
            <img src="https://cdn.bulbagarden.net/upload/3/36/132Ditto.png" alt="Ditto."/>
            <p>Ditto</p>
          </section>
          <section className="col-3 box">
            <img src="https://cdn.bulbagarden.net/upload/thumb/a/ab/131Lapras.png/1200px-131Lapras.png" alt="Lapras."/>
            <p>Lapras</p>
          </section>
          <section className="col-3 box">
            <img src="https://cdn.bulbagarden.net/upload/thumb/f/fb/143Snorlax.png/1200px-143Snorlax.png" alt="Snorlax."/>
            <p>Snorlax</p>
          </section>
        </div>
      </article>

      <article className="call-to-action">
        <div className="row">
          <section className="col-12 box">
            <h1>IT'S TIME TO LEARN THEM ALL!</h1>
            <hr />
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </section>
        </div>
      </article>
    </main>
  );
}

export default LandingPage;
