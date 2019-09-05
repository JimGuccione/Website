import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {Jumbotron, Grid, Row, Col, Image, Button, ButtonToolbar} from 'react-bootstrap';
import Navbar from "./CustomNavbar";
import Freshman from "./pages/Freshman";
import './Home.css';

class Home extends Component {
    render() {
        return (
            <Grid>
                <Jumbotron>
                    <div className ="logoHolder" >
                        <div className="row">
                            <div className="col-md-5">
                                <h2>Welcome to GNLB</h2>
                                <p> Get Recruited</p>
                            </div>
                            <div className="col-md-7" width="400px">
                                <Image src="/assets/GNLB New.png" height="600px" />
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <br />

                <br />
                <br />
                <br />
                    <ButtonToolbar>
                        <Button href="./pages/freshman" bsStyle="primary">Freshman</Button>
                        <Button href="./pages/sophomore" bsStyle="primary">Sophomore</Button>
                        <Button href="./pages/freshman" bsStyle="primary">Junior</Button>
                        <Button href="./pages/senior" bsStyle="primary">Senior</Button>
                        <Button href="./pages/prehighschool" bsStyle="primary">Eighth Grade</Button>
                    </ButtonToolbar>
                <div className="questions">
                        <text1>Player Pipeline Recruiting Service</text1>
                    <br />
                    <br />
                        <text2>   Player Pipeline is a college recruiting service for student athletes.</text2>
                    <br />
                       <text2>   We are dedicated to serving families and baseball players who are committed to playing at the next level.
                        The recruiting process can be an overwhelming experience,
                           we guide the athlete by developing an organized plan designed to achieve success.</text2>
                    <br />
                        <text2>   We limit the number of players/families we work with, this enables us to provide a true “white glove” service.
                            This means our players receive the highest level of attention during the recruiting process.</text2>
                    <br />
                        <text2>   This is one of the most important decisions a ball player will make.
                        Player Pipeline understands the importance of this process and will be alongside you every step of the way.

                    </text2>
                    <Row className="show">
                        <Col xs={12} sm={4} className="person">
                            <Image src="/assets/PlayerPipeline logo.png" height="400px" width="800px"/>
                            <br />

                        </Col>
                    </Row>

                </div>

            </Grid>
        );
    }
}

export default Home;