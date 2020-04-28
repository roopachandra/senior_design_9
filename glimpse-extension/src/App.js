/*global chrome*/
import React from 'react';
import logo from './logo.svg';
import Article from './Article'
import './App.css';
import gLogo from './assets/fullLogoBlue.png';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
      <img src={gLogo}/>
        <Article 
          title1 = "TITLE ONE" 
          title2 = "TITLE TWO" 
          title3 = "TITLE THREE"
          text1 = "TEXT1"
          text2 = "TEXT2"
          text3 = "TEXT3"
          link1 = "https://www.dailymail.co.uk/ushome/"
          link2 = "https://www.foxnews.com/"
          link3 = "https://www.reuters.com/"
          source1 = "Fox News"
          source2 = "CNN"
          source3 = "DailyMail"
          />
      </header>
    </div>
  );
}

export default App;
