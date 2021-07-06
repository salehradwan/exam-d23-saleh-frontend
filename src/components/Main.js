import React, { Component } from 'react'
import axios from 'axios'
import Drinkes from './Drinkes'

export class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            serverUrl: process.env.REACT_APP_SERVER_URL,
            cocktailData: [],
            showData: false,
            myData: []
        }
    }

    componentDidMount = () => {
        axios.get(`${this.state.serverUrl}/cocktail`).then(response => {
            this.setState({
                cocktailData: response.data.drinks,
                showData: true
            })
        }).catch(error => {
            alert(error.message);
        });
    }

    createDrink = (data) => {
        axios.post(`${this.state.serverUrl}/cocktailDB`, data).then(response => {
            this.setState({
                myData: response.data
            })
        }).catch(error => {
            alert(error.message);
        })
    }
    render() {
        return (
            <div>
                {
                    this.state.showData &&
                    <Drinkes 
                    cocktailData = {this.state.cocktailData}
                    createDrink = {this.createDrink}
                    />
                }
            </div>
        )
    }
}

export default Main
