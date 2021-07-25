import React, { Component } from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import Header from './components/Header'//一般组件
import Home from './pages/Home'//路由组件
import About from './pages/About'

const NavList = styled.li`
width:100px;
height:30px;
font-size:1rem;
list-style-type:none;
text-align:center;
border:1px solid #ddd;
border-radius:3px;
padding:10px;
&:hover{
    cursor:pointer;
    background-color:lightblue;
}`;

const Main = styled.div`
display:flex;`;

const Content = styled.div`
width:500px;
height:600px;
background-color:lightgreen;
padding:20px;`;

export default class App extends Component {

    render() {
        return (
            <div>
                <Header />
                <Main>
                    <ul>
                        <NavList>
                            <NavLink to="/home">Home page</NavLink>
                        </NavList>
                        <NavList>
                            <NavLink to='/about'>About page</NavLink>
                        </NavList>
                    </ul>
                    <Content>
                        <Switch>
                            <Route path="/about" component={About} />
                            <Route path="/home" component={Home} />
                        </Switch>
                    </Content>
                </Main>
            </div>
        )
    }
}
