import logo from './logo.svg';
import './App.css';
import React from 'react';
import UserInfo from './components/UserInfo'
import Clock from './components/Clock';
import Toggle from './components/Toggle';
import Greeting from './components/Greeting';
import LoginControl from './components/LoginControl'
import ItemList from './components/ItemList';
import Reservation from './components/Reservation';
import Calculator from './components/stateUp/Calculator';
import WelcomeDialog from './components/IncludeRelation/WelcomDialog';
const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'https://placekitten.com/g/64/64',
  },
},unreadMessages = ['111','222'];
// const listItem = unreadMessages.map((msg)=><li>{msg}</li>)
// console.log([1,2,3].map((function(x){ return x+2}).bind(this)))
class App extends React.Component{
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <p>
            <a className="App-link" href="https://reactjs.org">
              Learn React
            </a>
          </p>
        </header>
        <section className="app-content">
          <section className="user-wrapper">
            <UserInfo user={comment.author}/> 
            <div className="comment-text">{comment.text}</div>
          </section>
          <Clock/>
          <Toggle/>
          <Greeting isLoginedIn = {false}/>
          <LoginControl unreadMessages={unreadMessages}/>
        </section>
        <ItemList number={unreadMessages}/>
        <Reservation/>
        <Calculator/>
        <WelcomeDialog/>
      </div>
    )
  }
}

export default App;
