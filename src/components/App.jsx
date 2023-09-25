import style from "./App.module.css";
import React, { Component } from 'react';
import ContactForm from "./ContactForm";

class App extends Component {
  state = {
    contacts: [],
    name: ''
  }

  render() {
    return (
    <div className={style['app-container']}>
      <ContactForm />
    </div>
  );
  }
  
};


export default App;
