import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import logo from '../logo.png';
import styled from 'styled-components';
import { ButtonContainer } from './Button';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import { Searchbar, Button, Input, Form } from './Searchbar';
import axios from 'axios';

const url = 'http://localhost:4242/users/me/logout'

export default class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: '',
            token: false
        }
    }

    logout = (() => {
        const token = localStorage.getItem('ethiclothe_token');
 
        axios.post(url, null, {
            headers: {
                "Authorization": "Bearer " + token
            }
        })
            .then((res) => {
                console.log(res.data)
                localStorage.removeItem('ethiclothe_token');
                localStorage.removeItem('ethiclothe_firstname');
            }).catch((error) => {
                console.log(error)
            });
    })

    render() {
        console.log(this.state.content);
        return (
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
                {/*https://www.iconfinder.com/icons/1243689/call_phone_icon
Creative Commons (Attribution 3.0 Unported);
https://www.iconfinder.com/Makoto_msk */}

                <Link to='/'>
                    <img src={logo} alt="store" className="navbar-brand logo-size" />
                </Link>
                {/*<ul className="navbar-nav align-items-center">
                <li className="nav-item ml-5">
                    <Link to="/" className="nav-link">
                        products
                    </Link>
                </li>
            </ul>*/}


                <Searchbar content={this.state.content} />

                <Link to='/cart' className="ml-auto">
                    <ButtonContainer>
                        <span className="mr-2">
                            <AddShoppingCartIcon />
                        </span>
                        Panier
                </ButtonContainer>
                </Link>
                <Link to='/inscription' className="">
                    <ButtonContainer>
                        <PersonAddIcon />
                        {/* <span className="mr-2">
                    <i className="fas fa-cart-plus"></i>
                    </span> */}
                        Inscription
                </ButtonContainer>

                </Link>

                <Link to='/connexion' className="">
                    <ButtonContainer>

                        <AssignmentIndIcon />
                        {/* <span className="mr-2">
                    <i className="fas fa-cart-plus"></i>
                    </span> */}
                        Connexion
                </ButtonContainer>
                </Link>


                <Link to='/' className="">
                    <ButtonContainer onClick={this.logout}>

                        <AssignmentIndIcon />
                        {/* <span className="mr-2">
                    <i className="fas fa-cart-plus"></i>
                    </span> */}
                        Deconnexion
                </ButtonContainer>
                </Link>

            </NavWrapper>
        )
    }
}
const NavWrapper = styled.nav`
background:var(--mainGreen);
.nav-link{
    color:var(--mainWhite)!important;
    font-size:1.3rem;
    text-transform:capitalize;
}
`
