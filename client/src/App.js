import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import { LoginPage } from './LoginPage';
import { HomePage } from './HomePage';
import './App.scss';

const ProfilePage = <div></div>;
const AuthorPage = <div></div>;
class App extends React.Component {
  render (){
    return (
      <BrowserRouter>
        <Route exact path="/" component={LoginPage} />
        <Route path="/home" component={HomePage} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/author" component={AuthorPage} />
      </BrowserRouter>
    )
  }
}

export default App;
