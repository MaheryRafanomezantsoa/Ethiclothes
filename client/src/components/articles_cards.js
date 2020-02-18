import React from 'react'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Spinner, Button, CardDeck, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const url = 'http://localhost:4242/articles'

class ArticlesCards extends React.Component {
  constructor(props) {
    super(props)
    this.getArticles = this.getArticles.bind(this)
    this.state = {
      articles: [],
    }
  }

  getArticles() {
      
  }

  componentDidMount = () => {
    axios.get(url)
      .then((res) => {
        console.log(res.data.data)
        this.setState({
          articles: res.data.data
        })
      }).catch((error) => {
        console.log(error)
      });
  }

  render() {
    const { articles } = this.state
    if (articles.length === 0 ) {
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
        articles.slice(0,3).map((article, i) => {
          return(
          
            <Card key={i} >
              
              <Card.Body>
                <Card.Img variant="top" src={article.img}/>
              </Card.Body>
              <Card.Footer>
                <Card.Title>{article.title}</Card.Title>
                <Card.Text>{article.info}</Card.Text>
                <Card.Text>{article.price + " €"}</Card.Text>
                <Link to="/product">
                <Button style={{background: "var(--mainGreen)"}}>Voir plus d'articles...</Button>
                </Link>
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
