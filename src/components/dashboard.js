import React from 'react';
import {connect} from 'react-redux';

import requiresLogin from './requires-login.js';
// import { fetchProtectedData } from '../actions/protected-data.js';
import { fetchQuestionData, submitQuestionAnswer, resetQuestionData } from '../actions/questions.js';

import '../styles/float-grid.css';
import '../styles/dashboard.css';

export class Dashboard extends React.Component {
  constructor(props) {                                                                                                                                                                                                                                                                                                                                                                                                                
    super(props);
    this.state = {
      imageClass: 'pokemon-image-fade-in',
      backgroundClass: 'main-section-fill-fade-in',
      inputValue: '',
      placeholderText: 'your answer',
      buttonDisable: false
    };
  }

  componentDidMount() {
    this.props.dispatch(fetchQuestionData(this.props.id));
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.inputValue === '') {
      this.setState({ placeholderText: 'cannot be empty' });
    } else {
      this.setState({
        buttonDisable: true,
        placeholderText: 'your answer'
      });
      this.props.dispatch(submitQuestionAnswer({
        input: this.state.inputValue,
        id: this.props.currentPokemon.id,
        userId: this.props.id,
      }));
    }
  }

  displayName() {
    if (this.props.results.bool === undefined) {
      return (
        <section className="text-window">
          <p id={this.state.backgroundClass}>Who's that Pokémon?</p>
        </section>
      );
    } else {
      return (
        <section className="text-window">
          <p id={this.state.backgroundClass}>{this.props.results.name}</p>
        </section>
      );
    }
  }

  displayInput() {
    if (this.props.results.bool === undefined) {
      return (
        <form>
          <section className="text-window">
            <input
              type="text"
              className="submit-form"
              placeholder={this.state.placeholderText}
              value={this.state.inputValue}
              onChange={e => this.updateInputValue(e)}
            />
          </section>
          <input
            type="submit"
            className="submit-button"
            disabled={this.state.buttonDisable}
            onClick={e => this.handleSubmit(e)}
          />
        </form>
      );
    }
  }

  displayResult() {
    if (this.props.results.bool === true) {
      return (
        <React.Fragment>
        <section className="text-window">
          <p id={this.state.backgroundClass}>
            <span className="attempts">Total Attempts: {this.props.results.attempts}</span>
            <span className="passed">Passed Attempts: {this.props.results.passed}</span>
            <span className="message">You are correct!</span>
          </p>
        </section>
        <button
          id={this.state.backgroundClass}
          className="submit-button"
          onClick={() => {
            this.props.dispatch(resetQuestionData());
            this.nextPokemon();
          }}
        >Next Pokemon
        </button>
        </React.Fragment>
      );
    }
    if (this.props.results.bool === false) {
      return (
        <React.Fragment>
        <section className="text-window">
          <p id={this.state.backgroundClass}>
            <span className="attempts">Total Attempts: {this.props.results.attempts}</span>
            <span className="passed">Passed Attempts: {this.props.results.passed}</span>
            <span className="message-wrong">You are incorrect.</span>
          </p>
        </section>
        <button
          id={this.state.backgroundClass}
          className="submit-button"
          onClick={() => {
            this.props.dispatch(resetQuestionData());
            this.nextPokemon();
          }}
        >Next Pokemon
        </button>
        </React.Fragment>
      );
    }
  }

  nextPokemon() {
    setTimeout(() => {
      new Promise(() => this.props
        .dispatch(fetchQuestionData(this.props.id))
        .then(this.setState({ imageClass: 'pokemon-image-fade-in', backgroundClass: 'main-section-fill-fade-in' }))
      )
    }, 1000);
    this.setState({
      imageClass: 'pokemon-image-fade-out',
      backgroundClass: 'main-section-fill-fade-out',
      inputValue: '', 
      buttonDisable: false
    });
  }

  updateInputValue(e) {
    this.setState({
      inputValue: e.target.value.trim()
    });
  }

  render() {
    return (
      <main className="dashboard">
        <article className="pokedex">
          <div className="row">
            <section className="col-6 box">
              <img src={require('../images/top-left.png')} alt="Pokédex control panel decor."/>
              {this.displayName()}
              <section className="pic-window">
                <img
                  id={this.state.backgroundClass}
                  className="poke-pic"
                  style={{backgroundColor: this.props.currentPokemon.typeColor}}
                  src={this.props.currentPokemon.imageURL}
                  alt="A mysterious Pokémon..."
                />
              </section>
              <img className="panel-decor" src={require('../images/bottom-left.png')} alt="Pokédex control panel decor."/>
            </section>
            <section className="col-6 box">
              <img className="panel-decor" src={require('../images/top-right.png')} alt="Pokédex control panel decor."/>
              <section className="text-window"><p id={this.state.backgroundClass}>{this.props.currentPokemon.description}</p></section>
              {this.displayInput()}
              {this.displayResult()}
            </section>
            {/* <div className={this.state.backgroundClass} style={{backgroundColor: this.props.currentPokemon.typeColor}}></div>
            <div className="image-outer-box">
              <div className="image-box">
                {this.displayName()}
                <img src={this.props.currentPokemon.imageURL} className={this.state.imageClass} />
              </div>
            </div>
            <div className="input-outer-box">
              <div className="input-box">
                <div className="description">{this.props.currentPokemon.description}</div>
                <div className="submit-container">
                  <input placeholder={this.state.placeholderText}value={this.state.inputValue} onChange={(e) => this.updateInputValue(e)}></input>
                  <button type="submit" disabled={this.state.buttonDisable} onClick={() => {this.handleSubmit()}}>Submit</button>
                </div>
                <div className="result">{this.displayResult()}</div>
              </div>
            </div> */}
          </div>
        </article>
      </main>
    );
  }
}

const mapStateToProps = (state, props) => {
  const { currentUser } = state.auth;
  return {
    id: state.auth.currentUser.id,
    name: `${currentUser.firstName} ${currentUser.lastName}`,
    protectedData: state.protectedData.data,
    submited: false,
    currentPokemon: state.questions.currentPokemon,
    results: state.questions.results,
    questionNum: state.questions.questionNum 
  };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
