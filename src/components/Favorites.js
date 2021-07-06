import React, { Component } from 'react'
import axios from 'axios'
import FavDrinks from './FavDrinks'
export class Favorites extends Component {
    constructor(props) {
        super(props)
        this.state = {
            serverUrl: process.env.REACT_APP_SERVER_URL,
            favoriteData: [],
            showFavData: false
        }
    }

    componentDidMount = () => {
        axios.get(`${this.state.serverUrl}/cocktailDB`).then(response => {
            this.setState({
                favoriteData: response.data,
                showFavData: true
            })
        }).catch(error => {
            alert(error.message);
        });
    }

    deleteDrink = (drink_idx) => {
        axios.delete(`${this.state.serverUrl}/cocktail/${drink_idx}`).then(response => {
            this.setState({
                favoriteData: response.data,
                showFavData: true
            })
        }).catch(error => {
            alert(error.message);
        });
    }
    render() {
        return (
            <div>
                {
                    this.state.showFavData && 
                    <FavDrinks 
                    favoriteData = {this.state.favoriteData}
                    deleteDrink = {this.deleteDrink}
                    />
                }
            </div>
        )
    }
}

export default Favorites
