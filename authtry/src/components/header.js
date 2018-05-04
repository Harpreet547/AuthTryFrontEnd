import React, { Component } from 'react';
import ReactDom from 'react-dom';
import {
    NavLink
} from 'react-router-dom';

import AppBar from 'material-ui/AppBar';
import {Tabs, Tab} from 'material-ui/Tabs';

import headerStyle from '../styles/header';

import historyManager from '../managers/historyManger';

class Header extends Component {
    
    constructor(props) {
        super(props);
        console.log('Header Props: ' + JSON.stringify(this.props))
        this.redirectTo = this.redirectTo.bind(this);
    }

    getNavLink(routeTo, title) {
        return (
            <NavLink style={ headerStyle.tabTitleNavLink } to={ routeTo }>{ title }</NavLink>
        );
    }

    redirectTo(url) {
        console.log('SIGNUP REDIRECT');
        if(this.props !== undefined && this.props !== {}) {
            console.log(JSON.stringify(this.props));
            historyManager.pushRoute(url, this.props);
        }
        //this.props.history.push(url);
        //return <Redirect to={ url }/>;
    }

    tabView() {
        return (
            <Tabs  style={ headerStyle.tabs }>
                <Tab label='Login' onActive={ () => this.redirectTo('/login') } /*{ this.getNavLink('/', 'Login') }*//>
                    
                <Tab label='Sign Up' onActive={ ()=> this.redirectTo('/signUp') }/*{ this.getNavLink('/signUp', 'Sign Up') }*/ />
                    
            </Tabs>
        );
    }

    render() {
        return (
            <div>
                <AppBar 
                title='Auth Try'
                showMenuIconButton={ false } 
                iconElementRight={ this.tabView() } />
            </div>
            
        )
    }
}

export default Header;