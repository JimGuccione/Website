import React, {Component} from 'react';
import { Image, style, Grid } from "react-bootstrap";
import Navbar from './CustomNavbar';
import {Style} from "react";
import "./Resources.css";
import width from "material/src/slider";

class Resources extends Component {
    render() {
        return (
            <div>
            <Grid>
                <div className='containResource'>
                <div className='resourceStuff'>
                    <div className="trainingCard">
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <Image src="./assets/yogi 200.png" alt="Avatar" height={'300px'} width={"400px"}/>
                            </div>
                            <div className="flip-card-back">
                                <h1>Training</h1>
                                <p>To get Bigger, Stronger, Faster,
                                You MUST get proper training.</p>
                                <p>Developing a training program to
                                help you achieve your goals.</p>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="gradeCard">
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <Image src="./assets/tommy lasorda.png" alt="Avatar" height={"300px"} width={"400px"}>
                                </Image>
                            </div>
                            <div className="flip-card-back">
                                <h1>Grades</h1>
                                <p>It can seem impossible to manage training, playing and school work.</p>
                                <p>We take</p>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="teamCard">
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <Image src="./assets/derek jeter.png" alt="Avatar" height={"300px"} width={"400px"}>
                                </Image>
                            </div>
                            <div className="flip-card-back">
                                <h1>John Doe</h1>
                                <p>Architect & Engineer</p>
                                <p>We love that guy</p>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <br />
                <br />
                <div className="well">Basic Well</div>
                <div className='resourceStuff2'>
                    <div className="instructorCard">
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <Image src="./assets/tom hanks.png" alt="Avatar" height={"300px"} width={"400px"}>
                                </Image>
                            </div>
                            <div className="flip-card-back">
                                <h1>John Doe</h1>
                                <p>Architect & Engineer</p>
                                <p>We love that guy</p>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="promoteCard">
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <Image src="./assets/joe dimaggio.png" alt="Avatar" height={"300px"} width={"400px"}>
                                </Image>
                            </div>
                            <div className="flip-card-back">
                                <h1>John Doe</h1>
                                <p>Architect & Engineer</p>
                                <p>We love that guy</p>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="showCaseCard">
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <Image src="./assets/mickey mantle.png" alt="Avatar" height={"300px"} width={"400px"}>
                                </Image>
                            </div>
                            <div className="flip-card-back">
                                <h1>John Doe</h1>
                                <p>Architect & Engineer</p>
                                <p>We love that guy</p>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <br />
                <br />
                <div className="well">Basic Well</div>
                <br />
                <br />
                <br />
                </div>
            </Grid>
        </div>
        );
    }
}

export default Resources;