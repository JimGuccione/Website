import React, {Component} from 'react';
import "./Pages.css";

class PreHighSchool extends Component {
    render() {
        return (
            <div>
                <br />
                <br />
                <br />
                <br />
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img src="../assets/mickey mantle.png" alt="Avatar"/>
                        </div>
                        <div className="flip-card-back">
                            <h1>John Doe</h1>
                            <p>Architect & Engineer</p>
                            <p>We love that guy</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PreHighSchool;