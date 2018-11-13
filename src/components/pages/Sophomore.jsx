import React, {Component} from 'react';
import "./Pages.css";
import {Button, Col, Image, Collapse,Well, ButtonGroup, SplitButton} from "react-bootstrap";
import Navbar from "../CustomNavbar";

class Sophomore extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            classes: {
                open: false
            },
            testing: {
                open: false
            },
            resource: {
                open: false
            },
            season: {
                open: false
            },
            yearAround: {
                open: false
            },
            communication: {
                open: false
            },
            administrative: {
                open: false
            }
        };
    }

    render() {
        return (

            <div className="containSophomore">
                <br />
                <br />
                <br />
                <br />
                <div className="example">
                    <p>Sophomore Recruiting Guide</p>
                    <div className="containSophomore2">
                        <div className="academicTips">
                                <h2>Academic Tips</h2>
                                    <div className="academicButton">
                                        <Button onClick={() => this.setState({ classes: { open: !this.state.classes.open },
                                            testing: { open: this.state.testing.open },
                                            resource: { open: this.state.resource.open } })}>
                                            Classes
                                        </Button>
                                        <Collapse in={this.state.classes.open}>
                                            <div className="classes">
                                                <Well>
                                                    <p>Take honors or AP classes only if an A or B
                                                        average is possible</p>
                                                    <p>Maintain a minimum of a 3.0 GPA</p>
                                                </Well>
                                            </div>
                                        </Collapse>
                                    </div>
                                    <div className="testingButton">
                                        <Button onClick={() => this.setState({ classes: { open: this.state.classes.open },
                                            testing: { open: !this.state.testing.open },
                                            resource: { open: this.state.resource.open } })}>
                                            Testing
                                        </Button>
                                            <Collapse in={this.state.testing.open}>
                                                <div className='testing'>
                                                    <Well>
                                                        <p>Consider taking SAT II test if you complete an
                                                            AP class and feel good with the subject matter</p>
                                                        <p>Sign up for practice ACT test as soon as it is available</p>
                                                        <p>Schedule and take the Pre-ACT (PLAN)
                                                            and/or Pre-SAT (PSAT).</p>
                                                        <p>Organize upcoming class schedule for the
                                                            next academic year</p>
                                                    </Well>
                                                </div>
                                            </Collapse>
                                    </div>
                            <div className="resourceButton">
                                <Button onClick={() => this.setState({ classes: { open: this.state.classes.open },
                                    testing: { open: this.state.testing.open},
                                    resource: { open: !this.state.resource.open } })}>
                                    Resources
                                </Button>
                                <Collapse in={this.state.resource.open}>
                                    <div className='resource'>
                                        <Well>
                                            <p>Ask for help from your teacher or a tutor if you
                                                are having difficulty</p>
                                            <p>Maintain positive relationships with all
                                                teachers and school staff</p>
                                        </Well>
                                    </div>
                                </Collapse>
                            </div>
                                    <div className="athleticTips">
                                        <h2>Athletic Tips</h2>
                                        <div className="inSeasonButton">
                                            <Button onClick={() => this.setState({ season: { open: !this.state.season.open },
                                                yearAround: { open: this.state.yearAround.open }})}>
                                                In Season
                                            </Button>
                                            <Collapse in={this.state.season.open}>
                                                <div className="season">
                                                    <Well>
                                                        <p>Get quality video for recruiting & training
                                                            purposes</p>
                                                        <p>Continue to manage your own statistics</p>
                                                    </Well>
                                                </div>
                                            </Collapse>
                                        </div>
                                        <div className="yearAroundButton">
                                            <Button onClick={() => this.setState({ season: { open: this.state.season.open },
                                                yearAround: { open: !this.state.yearAround.open } })}>
                                                Year Around
                                            </Button>
                                            <Collapse in={this.state.yearAround.open}>
                                                <div className='yearAround'>
                                                    <Well>
                                                        <p>Make quality & responsible decisions</p>
                                                        <p>Seek positive coaches that provide great
                                                            instruction and leadership</p>
                                                        <p>Maintain positive relationships with all
                                                            coaches and athletic staff</p>
                                                    </Well>
                                                </div>
                                            </Collapse>
                                        </div>
                                                <div className="recruitingTips">
                                                    <h2>Recruiting Tips</h2>
                                                    <div className="communicationButton">
                                                        <Button onClick={() => this.setState({ communication: { open: !this.state.communication.open },
                                                            administrative: { open: this.state.administrative.open }})}>
                                                            Communication
                                                        </Button>
                                                        <Collapse in={this.state.communication.open}>
                                                            <div className="communication">
                                                                <Well>
                                                                    <p>Get quality video for recruiting & training
                                                                        purposes</p>
                                                                    <p>Continue to manage your own statistics</p>
                                                                </Well>
                                                            </div>
                                                        </Collapse>
                                                    </div>
                                                    <div className="administrativeButton">
                                                        <Button onClick={() => this.setState({ communication: { open: this.state.communication.open },
                                                            administrative: { open: !this.state.administrative.open } })}>
                                                            Administrative
                                                        </Button>
                                                        <Collapse in={this.state.administrative.open}>
                                                            <div className='administrative'>
                                                                <Well>
                                                                    <p>Make quality & responsible decisions</p>
                                                                    <p>Seek positive coaches that provide great
                                                                        instruction and leadership</p>
                                                                    <p>Maintain positive relationships with all
                                                                        coaches and athletic staff</p>
                                                                </Well>
                                                            </div>
                                                        </Collapse>
                                                    </div>
                                    </div>
                            <br />
                            <br />
                            <br />
                            <br />
                            <div className="academicInfo">
                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
        );
    };
}

export default Sophomore;