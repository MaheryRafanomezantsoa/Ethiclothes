import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Navbar2 from './components/Navbar2';

import ProductList from './components/ProductList';
import Home from './components/Home';
import Details from './components/Details';
import Cart from './components/Cart/';
import Default from './components/Default';
import Modal from './components/Modal';
import Footer from './components/Footer';
import Inscription from './components/Inscription';
import Connexion from './components/Connexion';
import Product from './components/Product';
import CreateProduct from './components/Article_create';
import ArticlesList from './components/ArticlesList'
import ArticleSearch from './components/ArticleSearch'


class App extends Component {  

  render() {
    return (
      <React.Fragment>

        <Navbar />
        <Navbar2 />

        {/* <Slideshow /> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/product" component={ProductList} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route path="/inscription" component={Inscription} />
          <Route path="/connexion" component={Connexion} />
          <Route path="/create_article" component={CreateProduct} />
          <Route path="/show_article" component={ArticlesList} />
          <Route exact path="/product/:search" component={ArticleSearch} />
          <Route component={Default} />
        </Switch>

        <Modal />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
