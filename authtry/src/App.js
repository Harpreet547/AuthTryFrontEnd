import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


import Header from './components/header';
import Login from './components/login';
import SignUp from './components/signUp';

import appStyle from './styles/app';

import historyManager from './managers/historyManger';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('App Props: ' + JSON.stringify(this.props))
    historyManager.pushRoute('/login', this.props);
  }
  render() {
    return (
      <MuiThemeProvider muiTheme={ getMuiTheme(lightBaseTheme) }>
        <div className='App' style={ appStyle.app }>
          <div>
            <Header {...this.props}>
            </Header>
          </div>
          <div className='content' style={ appStyle.content }>
            <Route exact path='/login' component={ Login }/>
            <Route path='/signUp' component={ SignUp }/>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
