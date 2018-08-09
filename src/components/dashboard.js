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
                       inputValue: "",
                       buttonDisable: false };
    }

    componentDidMount() {
        this.props.dispatch(fetchQuestionData(this.props.id));
    }
    handleSubmit(){
        this.setState({
            buttonDisable: true
        })
        this.props.dispatch(submitQuestionAnswer(
            {
                input: this.state.inputValue,
                id: this.props.currentPokemon.id,
                userId: this.props.id
            }
        ))
        // this.props.dispatch(incrementQuestionNumber(this.props.questionNum))

    }
    resultDisplay(){
        if(this.props.results.bool === undefined){
            this.displayName("Who's that pokemon?")
            return <div></div>
        } else if (this.props.results.bool === true){
            return <div>You are correct!<button onClick={()=>{
                this.props.dispatch(resetQuestionData())
                this.nextPokemon()}}>Next Pokemon</button></div>
        } else if (this.props.results.bool === false){
            return <div>You are incorrect!<button onClick={()=>{
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
        setTimeout(()=>{new Promise(()=>this.props.dispatch(fetchQuestionData(this.props.id)).then(this.setState({imageClass: 'pokemon-image-fade-in'})))}, 1000);
        this.setState({
            imageClass: 'pokemon-image-fade-out',
            inputValue: "", 
            buttonDisable: false
        })
    }

    updateInputValue (e) {
        this.setState({
          inputValue: e.target.value
        });
    }
    render() {
        return (
            
            <div className="dashboard">
                <div className="main-section">
                    <div className="image-outer-box">
                        <div className="image-box">
                        {this.displayName()}
                        <img src={this.props.currentPokemon.imageURL} className={this.state.imageClass} />
                        </div>
                    </div>
                    <div className="input-outer-box">
                        <div className="input-box">
                            <div>{this.props.currentPokemon.description}</div>
                            <div className="submit-container">
                            <input value={this.state.inputValue} onChange={(e)=>this.updateInputValue(e)}></input>
                            <button type="submit" disabled={this.state.buttonDisable} onClick={()=>{
                                this.handleSubmit()}}>Submit</button>
                            </div>
                        </div>
                        {this.resultDisplay()}
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
