import React, { Component } from 'react'
import {  Nav } from 'react-bootstrap'
export class Header extends Component {
    render() {
        return (
            <div>
                <Nav
                    activeKey="/"
                    
                >
                    <Nav.Item>
                        <Nav.Link href="/">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/favorites">Favorites</Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
        )
    }
}

export default Header
