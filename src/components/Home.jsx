import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {Jumbotron, Grid, Row, Col, Image, Button} from 'react-bootstrap';
import './Home.css';

class Home extends Component {
    render() {
        return (
            <Grid>
                <Jumbotron>
                    <h2>Welcome to GNLB</h2>
                    <p> Get Recruited</p>
                </Jumbotron>
                <Link to="/about">
                    <Button bsStyle="primary">About Us</Button>
                </Link>
                <div className="questions">
                    <h2>Player Pipeline Recruiting Service</h2>
                    <p>Player Pipeline is a college recruiting service for student athletes.
                        We are dedicated to serving families and baseball players who are committed to playing at the next level.
                        The recruiting process can be an overwhelming experience,
                        we guide the athlete by developing an organized plan designed to achieve success.
                        We limit the number of players/families we work with, this enables us to provide a true “white glove” service.
                        This means our players receive the highest level of attention during the recruiting process.

                        This is one of the most important decisions a ball player will make.
                        Player Pipeline understands the importance of this process and will be alongside you every step of the way.

                    </p>
                    <Row className="show">
                        <Col xs={12} sm={4} className="person">
                            <Image src="/assets/mickey mantle.png" className="person"/>
                            <h3> Mickey</h3>
                        </Col>
                    </Row>

                </div>

            </Grid>
        );
    }
}

export default Home;