import React, { Component } from 'react';
import ReactDom from 'react-dom';
import {
    NavLink
} from 'react-router-dom';

import AppBar from 'material-ui/AppBar';
import {Tabs, Tab} from 'material-ui/Tabs';

import headerStyle from '../styles/header';

class Header extends Component {
    
    getNavLink(routeTo, title) {
        return (
            <NavLink style={ headerStyle.tabTitleNavLink } to={ routeTo }>{ title }</NavLink>
        );
    }

    tabView() {
        return (
            <Tabs  style={ headerStyle.tabs }>
                <Tab label={ this.getNavLink('/', 'Login') }/>
                    
                <Tab label={ this.getNavLink('/signUp', 'Sign Up') } />
                    
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