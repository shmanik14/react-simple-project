import React from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './players.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

const Player = (props) => {
    const {img, name, salary} = props.player;
    return (
            <Col xs={6} md={3}>
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text><strong>Salary </strong>: ${salary}</Card.Text>
                        <Button onClick={() => props.handleAddPlayer(props.player)}  variant="primary"><FontAwesomeIcon icon={faPlusCircle} /> Add Player</Button>
                    </Card.Body>
                </Card>                       
            </Col>
    );
};

export default Player;