//this will check to see if you have spelled "gato" correctly or not. It checks 1 word out of 40 :(
//I think I was on the right track...but idk how to target all ens or sps or frs or des 
import React, { Component } from 'react';
import './App.css';

const initState = {
  words: [
    { "en": "cat", "de": "Katz", "fr": "chat", "sp": "gato" },
    { "en": "dog", "de": "Hund", "fr": "chien", "sp": "perro" },
    { "en": "man", "de": "Mann", "fr": "homme", "sp": "hombre" },
    { "en": "woman", "de": "Frau", "fr": "femme", "sp": "mujer" },
    { "en": "boy", "de": "Junge", "fr": "garcon", "sp": "chico" },
    { "en": "girl", "de": "Madchen", "fr": "fille", "sp": "niña" },
    { "en": "house", "de": "Haus", "fr": "maison", "sp": "casa" },
    { "en": "car", "de": "Auto", "fr": "voiture", "sp": "coche" },
    { "en": "plane", "de": "Fleugzug", "fr": "avion", "sp": "avión" },
    { "en": "butterfly", "de": "Schmetterling", "fr": "papillon", "sp": "mariposa" },
  ],
  input: '',
}

class App extends Component {
  constructor() {
    super();
    this.state = initState;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(e) {
    this.setState({
      input: e.target.value
    })
  }

  handleSubmit() {
    if(this.state.input === this.state.words[0].sp) {
      alert("ya did it!")
    } else if(this.state.input !== this.state.words[0].sp) {
      alert("boo wrong answer" + ' => ' + this.state.words[0].sp)
    }
  }

  render() {

    let en = this.state.words.map(function(langs, lang) {
      return(
        <ul key={lang}>
          <li>{langs.en}</li>
        </ul>
      )
    })

    return (
      <div>
    <div>
      <h1>Please select the language you want</h1>
      <div className="btns">
      <li>
      <button className="to" onClick={() => this.handleTo()}>English</button>
      <button className="to" onClick={() => this.handleTo()}>Dutch</button>
      <button className="to" onClick={() => this.handleTo()}>French</button>
      <button className="to" onClick={() => this.handleTo()}>Spanish</button>
      </li>
      </div>
    </div>
    <div id="theFlashcard">
      <ul>{en}</ul>
    </div>
      <input className="bottom" type="text" onChange={this.handleChange} value={this.state.input}/>
      <button className="bottom" onClick={this.handleSubmit}>Submit</button>
      <button className="bottom">Reset</button>
  </div>
    );
  }
}

export default App;
