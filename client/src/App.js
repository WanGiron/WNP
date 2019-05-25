// export default App;

import React, { Component, Redirect } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import './App.css';

import Container from './components/Container';
import Admin from './components/pages/Admin';
import LoginLocal from './components/login-local';
import UserSite from './components/pages/UserSite';
import Home from './components/Home';
import Logout from './components/logout';
import Weddings from './components/pages/Weddings';
import Portraits from './components/pages/Portraits';
import Engagements from './components/pages/Engagements';

// import Portraits from './components/pages/Portraits';
// import Results from "./pages/Results";

import PhotoWidgetUploader from './components/PhotoWidgetUploader';
import UsersDb from './components/UsersDb';

import NavbarMain from "./components/Navbar-main/Navbar-main";
import NavbarUser from "./components/Navbar-user/Navbar-user";


// import SignUp from './components/SignUp';

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
          <Switch>
            <Route exact path='/' render={() => (<Home {...this.props} setUser={this.setUser} user={this.state.user}/>)}/>
            <Route exact path="/admin" render={() => (<Admin {...this.props} user={this.state.user} />)}/>            
            <Route exact path="/weddings" render={() => (<Weddings {...this.props} user={this.state.user} />)}/> 
            <Route exact path="/portraits" render={() => (<Portraits {...this.props} user={this.state.user} />)}/> 
            <Route exact path="/engagements" render={() => (<Engagements {...this.props} user={this.state.user} />)}/> 
           
            {/* <Route exact path="/portraits" render={() => (<Portraits {...this.props} user={this.state.user} />)}/>               */}
            <Route exact path="/login-local" render={() => (<LoginLocal {...this.props} setUser={this.setUser} user={this.state.user} />)} />
            <Route exact path="/usersite" render={
              () => (
                <UserSite {...this.props} setUser={this.setUser} user={this.state.user} />
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
