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
                                <p>The First Step to getting Bigger, Stronger, Faster,
                                is getting STRONGER</p>
                                <p>Developing a training program to
                                help you achieve your goals is key to compete against today's athletes</p>
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
                                <h1>Greatness is not a gift</h1>
                                <p>Greatness lives in every player, it is an individuals desire to work and achieve that pushes him to greatness </p>
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
                                <h1>Talent vs Skill</h1>
                                <p>Timing beats Speed, </p>
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
                                <h1>Who is Looking</h1>
                                <p>Hustle, Attitude and Effort</p>
                                <p>Three things that go a long way with coaches, require absolutely no skill or talent</p>
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