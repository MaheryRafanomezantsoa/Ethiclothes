import React from 'react'
import styled from 'styled-components';
import FacebookIcon from '@material-ui/icons/Facebook';
import ShopIcon from '@material-ui/icons/Shop';
import PinterestIcon from '@material-ui/icons/Pinterest';
import InstagramIcon from '@material-ui/icons/Instagram';






import logo from '../logo.png';
export default function Footer() {
    return (
        <FooterContainer className="main-footer ">
           <div className="footer-middle"> 
            <div className="container">
                <div className="row">
                    {/* Column 1 */}
                    <div className="col-md-4 col-sm-6">
                    <img src={logo} alt="store" className="logo-footer"/>
                        
                    </div>
                    
                    
                    <div className="col-md-4 col-sm-6">
                        <h5>Nous contacter</h5>
                        <ul className="list-unstyled">
                            <li>9, Rue du Palais Rihour</li>
                            <li>59000 Lille</li>
                            <li>contact@ethiclothes.fr</li>
                            <li>03 09 65 84 23</li>
                            
                        </ul>
                       
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <h5>Suivez-nous sur</h5>
                        <div>
                        <FacebookIcon style={{marginRight:15}}/>
                        <InstagramIcon style={{marginRight:15}}/>
                        <PinterestIcon style={{marginRight:15}}/>
                        <ShopIcon />
                        </div>
                   </div>
                </div>
                {/* Footer Bottom */}
                <div className="footer-bottom">
                    <p className="text-xs-center">
                        &copy;{new Date().getFullYear()} EthiClothes Store - Tous droits réservés
                    </p>
                </div>
            </div>
            </div>
        </FooterContainer>
    )
}
const FooterContainer = styled.footer`
.footer-middle{
    background: var(--mainGreen);
    color: #fff;
    padding-top: 1rem;
    
    position: "fixed";
    left: "0",
    bottom: "0",    

    
}
.footer-bottom {
    padding-top: 1rem;
    padding-bottom: 1rem;
    text-align: center;
}

`