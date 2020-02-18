import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import Dropdown1 from './dropdown/Dropdown1';
import Dropdown2 from './dropdown/Dropdown2';
import Dropdown3 from './dropdown/Dropdown3';
import '../App.css';
import styled from 'styled-components';


export default class Navbar extends Component {
  

    render() {
        return (
           <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
{/*https://www.iconfinder.com/icons/1243689/call_phone_icon
Creative Commons (Attribution 3.0 Unported);
https://www.iconfinder.com/Makoto_msk */}
           
            <ul className="navbar-nav align-items-center">
                <li className="nav-item ml-2">
                    <Link to="/" className="nav-link" >
                      <Dropdown1 />
                    </Link>
                   
                </li>
                <li className="nav-item ml-2">
                    <Link to="/" className="nav-link" >
                        <Dropdown2 />
                    </Link>
                  
                </li>
                <li className="nav-item ml-2">
                    <Link to="/" className="nav-link">
                        <Dropdown3 />
                    </Link>
                </li>
            </ul>
            
           </NavWrapper>
        )
    }
}
const NavWrapper = styled.nav`
background:var(--mainBrown);
.navbar-nav{
    position: absolute
    justify-content: flex-end;
    padding: 0 auto;
    margin:auto;

.nav-link{
    color:var(--mainWhite)!important;
    font-size:1.3rem;
    text-transform:capitalize;
}
@media screen and (max-width: 600px){
    .navbar-nav{
        margin-top: 0;ss
    }
}
`