import React from 'react';
import { Route, Redirect, BrowserRouter, Switch } from 'react-router-dom';
import { LoginPage } from './LoginPage';
import { HomePage } from './HomePage';
import UserPage from './UserPage';
import { WritingPage } from './WritingPage';
import { ReadingPage } from './ReadingPage';
// import { PrivateRoute, PublicRoute } from './components';
import './App.scss';

// {const ProfilePage = <div></div>;
// const AuthorPage = <div></div>};

const PrivateRoute = (props) => {
  if (localStorage.getItem('token')) return '';
  return <Redirect to="/" />
}

const PublicRoute = (props) => {
  if (localStorage.getItem('token')) return <Redirect to="/home" />;
  return '';
}



class App extends React.Component {
  render (){
    return (
      <BrowserRouter>
        <Switch>
          {
          // <PublicRoute path="/" Component={LoginPage} />
          // <PrivateRoute path="/home" Component={HomePage}/>
          // <PrivateRoute path="/journal/note" Component={ReadingPage}/>
          // <PrivateRoute path="/journal/write" Component={WritingPage}/>
  }
          <Route exact path="/" component={LoginPage} />
          <Route path="/notes" component={HomePage} />
 {/*         <Route path="/user" component={UserPage} />
          <Route path="/journal/note" component={ReadingPage}/>
          <Route path="/journal/write" Component={WritingPage}/>*/}
          
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
