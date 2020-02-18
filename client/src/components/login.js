import React, { Component } from 'react';
import axios from 'axios';
import Default from './Default'
import '../App.css'

const url = 'http://localhost:4242/users/login'

class Login extends Component {

  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      errorMessage: false,
      token: false
    }
  }

  componentDidMount = async () => {
    const token = await localStorage.getItem('ethiclothe_token');
    if (token != null) {
      await this.setState({ token: token })
    } else {
      await this.setState({ token: false })
    }
  }

  onChangeUserEmail = e => { this.setState({ email: e.target.value }) }
  onChangeUserPassword = e => { this.setState({ password: e.target.value }) }

  onSubmit = e => {
    e.preventDefault()
    this.setState({ errorMessage: false })
    const userObject = {
      email: this.state.email,
      password: this.state.password,
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

    this.setState({ email: '', password: '' })
  }


  render() {
    const { errorMessage, token } = this.state
    if (!token) {
      return (

        <div className="login">
          <h3>Connexion :</h3><br />
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="email"><b>Email :</b></label>
              <input type="email" value={this.state.email} onChange={this.onChangeUserEmail} className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="password"><b>Mot de passe :</b></label>
              <input type="password" value={this.state.password} onChange={this.onChangeUserPassword} className="form-control" />
            </div>
            {
              errorMessage ?
                <div>Acces refusé</div>
                :
                ''
            }
            <div className="form-group">
              <button>Connection</button>
            </div>
          </form>
        </div>

      )
    } else {
      return (
        <div>
          <Default />
        </div>
      )
    }
  }
}
export default Login
