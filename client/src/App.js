// export default App;

import React, { Component, Redirect } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import './App.css';

import Container from './components/Container';
import Admin from './components/pages/Admin';
import LoginLocal from './components/login-local';
import PersonalAccount from './components/personal-account';
import Home from './components/Home';
import Logout from './components/logout';
import CardsModule from './components/pages/modules/CardsModule';
// import Results from "./pages/Results";

import PhotoWidgetUploader from './components/PhotoWidgetUploader';
import UsersDb from './components/UsersDb';

import NavbarMain from "./components/Navbar-main/Navbar-main";
import NavbarUser from "./components/Navbar-user/Navbar-user";


import SignUp from './components/SignUp';

import LocalAPI from './utils/local-auth';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
  }

  componentDidMount = () => {
    if (!this.state.user || !this.state.user.email) {
      LocalAPI.getUserData().then(user => {
        if (user) {
          this.setState({ user: user.data });
        }
      });
    }

  }

  logOut=()=>{
    LocalAPI.getLogout().then((res)=>{
      this.setUser({});
      return <Redirect to='/'/>
    })
  }

  setUser = user => {
    this.setState({
      user: user
    });
  };

  render() {
    return (
      <div>
      {this.props.children}
      <Router>
        <Container>
          <NavbarUser user={this.state.user} logOut={this.logOut}/>
          <NavbarMain />
          <div className="welcome-users"><h2>Welcome!</h2></div>
          <Switch>
            <Route exact path='/' render={() => (<Home {...this.props} setUser={this.setUser} user={this.state.user}/>)}/>
            <Route exact path="/admin" render={() => (<Admin {...this.props} user={this.state.user} />)}/>            
        
            <Route path='/signup' component={SignUp} />
            <Route exact path="/login-local" render={() => (<LoginLocal {...this.props} setUser={this.setUser} user={this.state.user} />)} />
            <Route exact path="/personal-account" render={
              () => (
                <PersonalAccount {...this.props} setUser={this.setUser} user={this.state.user} />
              )
            } />
            <Route exact path="/photoWidgetUploader" component={PhotoWidgetUploader} />
          </Switch>
          
        </Container>
      </Router>
      </div>
    );
  }
}

export default App;
