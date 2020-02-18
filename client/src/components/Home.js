import React, { Component } from 'react'
import Slideshow from './Slider';
import ArticlesList from './ArticlesList';
import {Button} from 'react-bootstrap';
import '../App.css';
// import Searchbar, { input } from './Searchbar';

export default class Home extends Component {
    
    render() {
// if(input){
//         console.log(input);
//     }
        return (
            
            <React.Fragment>
                <div>
                <Slideshow />
                    <div className="description">
                        <h1>Vêtements 100% ethiques <br/>et éco-responsable</h1>
                        <p>EthiClothes crée des vêtements à partir de <br/> 
                            matières naturelles ou reçyclées et locales.</p>
                        <Button style={{background: "var(--mainGreen)"}}>Voir le catalogue --></Button>
                    </div>
                </div>
                <ArticlesList/>
            </React.Fragment>
        )
    }
}
