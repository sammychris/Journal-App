import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import { LoginPage } from './LoginPage';
import { HomePage } from './HomePage';
import { WritingPage } from './WritingPage';
import './App.scss';

const ProfilePage = <div></div>;
const AuthorPage = <div></div>;
const JournalPage = <div></div>;


class App extends React.Component {
  render (){
    return (
      <BrowserRouter>
        <Route exact path="/" component={LoginPage} />
        <Route path="/home" component={HomePage} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/author" component={AuthorPage} />
        <Route path="/author/journal" component={JournalPage} />
        <Route path="/journal/write" component={WritingPage}/>
      </BrowserRouter>
    )
  }
}

export default App;
