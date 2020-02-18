import React, { Component } from 'react'
import Register from './register'
import Default from './Default'

export default class Inscription extends Component {
    constructor(props) {
        super(props);
        this.state = {
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

    render() {
        const { token } = this.state
        if (!token) {
            return (
                <div>
                    <Register />
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