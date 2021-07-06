import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap'

export class Drinkes extends Component {
    render() {
        return (
            <div>
                {this.props.cocktailData.map((value, idx) => {
                    return (
                        <Card style={{ width: '18rem', display: 'inline-block', margin: '20px 50px' }} key={idx}>
                            <Card.Img variant="top" src={value.strDrinkThumb} />
                            <Card.Body>
                                <Card.Title> {value.strDrink} </Card.Title>
                                <Button onClick={evt => this.props.createDrink(value)}variant="primary">Add to favorite</Button>
                            </Card.Body>
                        </Card>
                        
                    )
                })}
            </div>
        )
    }
}

export default Drinkes
