import React, { Component } from 'react';
import axios from 'axios';

const url = 'http://localhost:4242/article'

class Article extends Component {

  constructor(props) {
    super(props)

    this.onChangeUserTitle = this.onChangeUserTitle.bind(this);
    this.onChangeUserInfo = this.onChangeUserInfo.bind(this);
    this.onChangeUserPrice = this.onChangeUserPrice.bind(this);
    this.onChangeUserProductType = this.onChangeUserProductType.bind(this);
    this.onChangeUserSize = this.onChangeUserSize.bind(this);
    this.onChangeUserImg = this.onChangeUserImg.bind(this);
    this.onSubmit = this.onSubmit.bind(this);


    this.state = {
      title: '',
      info: '',
      price: '',
      product_type: '',
      size: '',
      img: '',
      errorMessage: false
    }
  }

  onChangeUserTitle = e => { this.setState({ title: e.target.value }) }
  onChangeUserInfo = e => { this.setState({ info: e.target.value }) }
  onChangeUserPrice = e => { this.setState({ price: e.target.value }) }
  onChangeUserProductType = e => { this.setState({ product_type: e.target.value }) }
  onChangeUserSize = e => { this.setState({ size: e.target.value }) }
  onChangeUserImg = e => { this.setState({ img: e.target.value }) }
  


  onSubmit = e => {
    e.preventDefault()
    this.setState({ errorMessage: false })
    const userObject = {
      title: this.state.title,
      info: this.state.info,
      price: this.state.price,
      product_type: this.state.product_type,
      size: this.state.size,
      img: this.state.img
    };

    axios.post(url, userObject)
      .then((res) => {
        console.log(res.data)
        this.setState({ errorMessage: true })
      }).catch((error) => {
        console.log(error)
      });

    this.setState({ title: '', info: '', price: '', product_type: '', size: '', img: '' })
  }


  render() {
    const { errorMessage } = this.state
    return (

      <div className="article_creation">
        <h3>Création d'article :</h3><br />
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="title"><b>Titre :</b></label>
            <input type="text" value={this.state.title} onChange={this.onChangeUserTitle} className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="info"><b>Description :</b></label>
            <input type="textarea" value={this.state.info} onChange={this.onChangeUserInfo} className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="price"><b>Prix :</b></label>
            <input type="number" value={this.state.price} onChange={this.onChangeUserPrice} className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="product_type"><b>Type produit :</b></label>
            <input type="text" value={this.state.product_type} onChange={this.onChangeUserProductType} className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="size"><b>Taille :</b></label>
            <input type="text" value={this.state.size} onChange={this.onChangeUserSize} className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="img"><b>Image associée :</b></label>
            <input type="text" value={this.state.img} onChange={this.onChangeUserImg} className="form-control" />
          </div>
          {
            errorMessage ?
              <div>Article créé !</div>
              :
              ''
          }
          <div className="form-group">
            <button>Valider</button>
          </div>
        </form>
      </div>

    )
  }
}
export default Article
