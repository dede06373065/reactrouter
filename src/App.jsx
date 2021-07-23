import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import styled from 'styled-components'
import Home from './components/Home'
import About from './components/About'

const Title = styled.div`
height:50px;
background-color:#lightgray;
font-size:2rem;
padding:30px;
`;
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
                <Title>React Router Demo</Title>
                <hr />
                <Main>
                    <ul>
                        <NavList>
                            <Link to="/home">Home page</Link>
                        </NavList>
                        <NavList>
                            <Link to='/about'>About page</Link>
                        </NavList>
                    </ul>
                    <Content>
                        <Route path="/about" component={About} />
                        <Route path="/home" component={Home} />
                    </Content>
                </Main>
            </div>
        )
    }
}
