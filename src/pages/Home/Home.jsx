import React, { Component } from 'react'
import styled from 'styled-components'
import { NavLink, Switch, Route } from 'react-router-dom';
import News from './News';
import Messages from './Messages';
const Nav = styled.ul`
display:flex;
`;
const NavLi=styled.li`
list-style-type:none;
width:100px;
height:20px;
padding:10px;
border:1px solid #ddd;
text-align:center`;


export default class Home extends Component {
    render() {
        return (
            <div>
                <h2>Home‘s NavLists ...</h2>
                <br />
                <Nav>
                    <NavLi>
                        <NavLink to="/home/news">NEWS</NavLink>
                    </NavLi>
                    <NavLi>
                        <NavLink to='/home/messages'>MESSAGES</NavLink>
                    </NavLi>
                </Nav>
                <Switch>
                    <Route path='/home/news' component={News} />
                    <Route path='/home/messages' component={Messages} />
                </Switch>

            </div>
        )
    }
}
