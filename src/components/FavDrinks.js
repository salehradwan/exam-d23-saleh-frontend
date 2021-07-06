import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap'

export class FavDrinks extends Component {
    render() {
        return (
            <div>
                {
                    this.props.favoriteData.map((value, idx) => {
                        return (
                            <Card style={{ width: '18rem' }} key={idx}>
                                <Card.Img variant="top" src={value.strDrinkThumb} />
                                <Card.Body>
                                    <Card.Title> {value.strDrink} </Card.Title>
                                    <Button onClick={evt => this.props.deleteDrink(value.idDrink)}variant="primary">Delete</Button>
                                </Card.Body>
                            </Card>
                        )
                    })
                }
            </div>
        )
    }
}

export default FavDrinks
