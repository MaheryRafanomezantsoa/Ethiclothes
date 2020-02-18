import React, { Component } from 'react';
import axios from 'axios';

const url = 'http://localhost:4242/users'

class Register extends Component {

  constructor(props) {
    super(props)

    this.onChangeUserFirstname = this.onChangeUserFirstname.bind(this);
    this.onChangeUserLastname = this.onChangeUserLastname.bind(this);
    this.onChangeUserDateBirth = this.onChangeUserDateBirth.bind(this);
    this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
    this.onChangeUserPassword = this.onChangeUserPassword.bind(this);
    this.onChangeUserComfirmPassword = this.onChangeUserComfirmPassword.bind(this);
    this.onChangeUserAddress = this.onChangeUserAddress.bind(this);
    this.onChangeUserPostalCode = this.onChangeUserPostalCode.bind(this);
    this.onChangeUserCity = this.onChangeUserCity.bind(this);
    this.onChangeUserCountry = this.onChangeUserCountry.bind(this);
    this.onChangeUserPhoneNumber = this.onChangeUserPhoneNumber.bind(this);
    this.onSubmit = this.onSubmit.bind(this);


    this.state = {
      firstname: '',
      lastname: '',
      date_birth: '',
      email: '',
      password: '',
      confirmPassword: '',
      address: '',
      postal_code: '',
      city: '',
      country: '',
      phone_number: '',
      errorMessage: false
    }
  }

  onChangeUserFirstname = e => { this.setState({ firstname: e.target.value }) }
  onChangeUserLastname = e => { this.setState({ lastname: e.target.value }) }
  onChangeUserDateBirth = e => { this.setState({ date_birth: e.target.value }) }
  onChangeUserEmail = e => { this.setState({ email: e.target.value }) }
  onChangeUserPassword = e => { this.setState({ password: e.target.value }) }
  onChangeUserComfirmPassword = e => { this.setState({ confirm_password: e.target.value }) }
  onChangeUserAddress = e => { this.setState({ address: e.target.value }) }
  onChangeUserPostalCode = e => { this.setState({ postal_code: e.target.value }) }
  onChangeUserCity = e => { this.setState({ city: e.target.value }) }
  onChangeUserCountry = e => { this.setState({ country: e.target.value }) }
  onChangeUserPhoneNumber = e => { this.setState({ phone_number: e.target.value }) }


  onSubmit = e => {
    e.preventDefault()
    this.setState({ errorMessage: false })
    const userObject = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      date_birth: this.state.date_birth,
      email: this.state.email,
      password: this.state.password,
      address: this.state.address,
      postal_code: this.state.postal_code,
      city: this.state.city,
      country: this.state.country,
      phone_number: this.state.phone_number
    };

    axios.post(url, userObject)
      .then((res) => {
        console.log(res.data)
        localStorage.setItem('ethiclothe_token', res.data.token);
        localStorage.setItem('ethiclothe_firstname', res.data.firstname);
        window.location.replace('/')
      }).catch((error) => {
        this.setState({ errorMessage: true })
        console.log(error)
      });

    this.setState({ firstname: '', lastname: '', date_birth: '', email: '', password: '', confirmPassword: '', address: '', postal_code: '', city: '', country: '', phone_number: '' })
  }


  render() {
    const { errorMessage } = this.state
    return (

      <div className="register">
        <h3>Formulaire d'inscription :</h3><br />
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="firstname"><b>Prénom :</b></label>
            <input type="text" value={this.state.firstname} onChange={this.onChangeUserFirstname} className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="lastname"><b>Nom :</b></label>
            <input type="text" value={this.state.lastname} onChange={this.onChangeUserLastname} className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="date_birth"><b>Date de naissance :</b></label>
            <input type="date" value={this.state.date_birth} onChange={this.onChangeUserDateBirth} className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="email"><b>Email :</b></label>
            <input type="email" value={this.state.email} onChange={this.onChangeUserEmail} className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="password"><b>Mot de passe :</b></label>
            <input type="password" value={this.state.password} onChange={this.onChangeUserPassword} className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword"><b>Confirmation du mot de passe :</b></label>
            <input type="password" value={this.state.confirm_password} onChange={this.onChangeUserComfirmPassword} className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="address"><b>Adresse :</b></label>
            <input type="text" value={this.state.address} onChange={this.onChangeUserAddress} className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="postal_code"><b>Code postal :</b></label>
            <input type="number" value={this.state.postal_code} onChange={this.onChangeUserPostalCode} className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="city"><b>Ville :</b></label>
            <input type="text" value={this.state.city} onChange={this.onChangeUserCity} className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="country"><b>Pays :</b></label>
            <input type="text" value={this.state.country} onChange={this.onChangeUserCountry} className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="phone_number"><b>Numéro de téléphone :</b></label>
            <input type="tel" value={this.state.phone_number} onChange={this.onChangeUserPhoneNumber} className="form-control" />
          </div>
          {
            errorMessage ?
              <div>Acces refusé</div>
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
export default Register
