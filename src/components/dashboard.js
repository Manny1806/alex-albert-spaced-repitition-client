import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchProtectedData} from '../actions/protected-data';
import {fetchQuestionData, submitQuestionAnswer, incrementQuestionNumber, resetQuestionData} from '../actions/questions'
import './dashboard.css'

export class Dashboard extends React.Component {
    constructor(props) {                                                                                                                                                                                                                                                                                                                                                                                                                
        super(props);
        // Don't call this.setState() here!
        this.state = { imageClass: 'pokemon-image-fade-in',
                       backgroundClass: 'main-section-fill-fade-in',
                       inputValue: "",
                       placeholderText: "your answer",
                       buttonDisable: false };
    }

    componentDidMount() {
        this.props.dispatch(fetchQuestionData(this.props.id));
    }
    handleSubmit(){
        if(this.state.inputValue === "") {
            this.setState({placeholderText: "input cannot be empty"})
        } else {

        
        this.setState({
            buttonDisable: true,
            placeholderText: "your answer"
        })
        this.props.dispatch(submitQuestionAnswer(
            {
                input: this.state.inputValue,
                id: this.props.currentPokemon.id,
                userId: this.props.id,
            }
        ))
        // this.props.dispatch(incrementQuestionNumber(this.props.questionNum))
    }
    }
    resultDisplay(){
        if(this.props.results.bool === undefined){
            this.displayName("Who's that pokemon?")
            return <div></div>
        } else if (this.props.results.bool === true){
            return <div><div className="attempts-passed-container"><span className="attempts">Total Attempts: {this.props.results.attempts}</span>
                <span className="passed">Passed Attempts: {this.props.results.passed}</span></div>
                <span className="message">You are correct!</span><button onClick={()=>{
                this.props.dispatch(resetQuestionData())
                this.nextPokemon()}}>Next Pokemon</button>
                </div>
        } else if (this.props.results.bool === false){
            return <div><div className="attempts-passed-container"><span className="attempts">Total Attempts: {this.props.results.attempts}</span>
            <span className="passed">Passed Attempts: {this.props.results.passed}</span></div>
            <span className="message-wrong">You are incorrect.</span><button onClick={()=>{
                this.props.dispatch(resetQuestionData())
                this.nextPokemon()
            }}>Next Pokemon</button></div>
        }
    }
    displayName(){
        if(this.props.results.bool === undefined){
            return <span className="pokemonName">Who's that Pokemon?</span>
        } else {
            return <span className="pokemonName">{this.props.results.name}</span>
        }
        
    }
    nextPokemon() {
        setTimeout(()=>{new Promise(()=>this.props.dispatch(fetchQuestionData(this.props.id)).then(this.setState({imageClass: 'pokemon-image-fade-in', backgroundClass: 'main-section-fill-fade-in'})))}, 1000);
        this.setState({
            imageClass: 'pokemon-image-fade-out',
            backgroundClass: 'main-section-fill-fade-out',
            inputValue: "", 
            buttonDisable: false
        })
    }

    updateInputValue (e) {
        this.setState({
          inputValue: e.target.value.trim()
        });
    }
    render() {
        return (
            
            <div className="dashboard">
                <div className="main-section" >
                    <div className={this.state.backgroundClass} style={{backgroundColor: this.props.currentPokemon.typeColor}}></div>
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
                            <input placeholder={this.state.placeholderText}value={this.state.inputValue} onChange={(e)=>this.updateInputValue(e)}></input>
                            <button type="submit" disabled={this.state.buttonDisable} onClick={()=>{
                                this.handleSubmit()}}>Submit</button>
                            </div>
                            <div className="result">{this.resultDisplay()}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const {currentUser} = state.auth;
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
