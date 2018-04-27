import React, { Component } from 'react';
import logo from './logo.svg';
import {
  Route,
  NavLink,
  HashRouter
} from 'react-router-dom';


import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


import Header from './components/header';
import Login from './components/login';
import SignUp from './components/signUp';

import appStyle from './styles/app';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={ getMuiTheme(lightBaseTheme) }>
        <HashRouter>
          <div className='App' style={ appStyle.app }>
            <div>
              <Header>
              </Header>
            </div>
            <div className='content' style={ appStyle.content }>
              <Route exact path='/' component={ Login }/>
              <Route path='/signUp' component={ SignUp }/>
            </div>
          </div>
        </HashRouter>
      </MuiThemeProvider>
    );
  }
}

export default App;
