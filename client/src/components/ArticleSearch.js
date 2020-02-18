import React from 'react'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Spinner, Button, CardDeck, Card } from 'react-bootstrap';



const url = 'http://localhost:4242/findarticles/'

class ArticlesCards extends React.Component {
  constructor(props) {
    super(props)
    this.getArticle = this.getArticles.bind(this)
    this.state = {
        isFetching: false,
      articles: [],
      
    }
  }

  getArticles() {
      
  }

  componentDidMount = () => {
    this.setState({ isFetching: true });
    axios.get(url + this.props.match.params.search)
      .then((res) => {
        console.log(res.data.data)
        this.setState({
          articles: res.data.data
        })
      }).catch((error) => {
        console.log(error)
      })
      .finally(() => {
          this.setState({ isFetching: false });
      });
  }

  render() {
    const { articles, isFetching } = this.state
    if (isFetching ) {
      return (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
       )
    }else {
      return (

        <div  className="cards">
          <CardDeck style={{ width: '90rem' }} >
        {
        articles.map((article, i) => {
          return(
          
            <Card key={i} >
              
              <Card.Body>
                <Card.Img variant="top" src={article.img}/>
              </Card.Body>
              <Card.Footer>
                <Card.Title>{article.title}</Card.Title>
                <Card.Text>{article.info}</Card.Text>
                <Card.Text>{article.price + " €"}</Card.Text>
                <Button variant="primary">Panier</Button>
              </Card.Footer>
            </Card>
          )
        })
      }
      </CardDeck>
      </div>
    )
    }
  }
};


export default ArticlesCards
