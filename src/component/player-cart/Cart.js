import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'


const Cart = (props) => {
    const selectedPlayer = props.selected;
    let total = 0;
    for (let i = 0; i < selectedPlayer.length; i++) {
        const element = selectedPlayer[i];
        total = total + element.salary;
    }
    return (
        <div className="cartArea">
            <Row>
                <Col xs={6} md={3}>
                <h5>Total Select: {selectedPlayer.length}</h5>
                </Col>
                <Col xs={6} md={3}>
                <h5>Total Salary: ${total}</h5>
                </Col>
                <Col xs={6} md={6}>
                <h5>Selected Player Name:</h5>
                <ul> {
                selectedPlayer.map(player =><li> <span><b>Name:</b> {player.name}</span><span> , <b>Salary:</b> ${player.salary}</span></li>)
                }</ul>
                </Col>
            </Row>
        </div>
    );
};

export default Cart;