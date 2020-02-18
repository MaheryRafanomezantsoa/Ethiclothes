import React, { Component } from 'react';
import axios from 'axios';

const url = 'http://localhost:4242//users/me/logout'

class Logout extends Component {

  logout = (() => {
    // localStorage.removeItem("access_token");
    // localStorage.removeItem("expire_at");

    axios.post(url, userObject)
      .then((res) => {
        console.log(res.data)
      }).catch((error) => {
        console.log(error)
      });
  })

  render() {
    return (

      <div className="log">
        <h3>Vous etes déconnecté</h3><br />
      </div>

    )
  }
}
export default Login