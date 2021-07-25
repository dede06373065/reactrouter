import React from 'react'
import styled from 'styled-components'

const Title = styled.div`
height:50px;
background-color:#lightgray;
font-size:2rem;
padding:30px;
`;
 const Header = () => {
    return (
        <div>
            <Title>React Router Demo</Title>
            <hr />
        </div>
    )
}
export default Header;
