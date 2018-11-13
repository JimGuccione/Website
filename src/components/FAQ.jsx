import React, {Component} from 'react';
import "./FAQ.css";

function Welcome(props) {
    return <p>{props.children}</p>;
}
class Faq extends Component {
    render() {
        return (
            <div className="faqContain">
                <br />
                <br />
                <br />
                <div className='questions'>
                    <Welcome>Hello world!</Welcome>
                </div>
            </div>
        );
    }
}

export default Faq;