import React, {Component} from 'react';
import { SocialIcon } from 'react-social-icons';
import "./Footer.css";

class Footer extends Component {
    render() {
        return (
            <div className='footerContainer'>
                <div className='footerLinks'>
                    <p> Follow us today...</p>
                    <SocialIcon url="http://twitter.com/jimguccione" />
                    <SocialIcon url="https://www.facebook.com/profile.php?id=100015426758162" />
                    <SocialIcon url="https://www.instagram.com/jimguccione/?hl=en" />
                    <SocialIcon url="https://www.linkedin.com/in/jimguccione/" />
                    <SocialIcon url="https://www.youtube.com/channel/UC1mRtwB52S9BT6XLXpv09KQ?view_as=subscriber" />
                    <SocialIcon url="https://plus.google.com/110414585007003388837" />
                    <SocialIcon url="https://github.com/JimGuccione" />

                </div>
            </div>
        );
    }
}

export default Footer;