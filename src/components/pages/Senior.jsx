import React, {Component} from 'react';
import { Link } from 'react-router-dom';

let userName='Joey';

userName ? console.log(`Hello, ${userName}`):console.log(`Hello`);

let userQuestion= "Can you answer my question?";
console.log(`The user asked: ${userQuestion}`);

let randomNumber=Math.floor(Math.random()*8);

let eightBall='';

switch (randomNumber){
    case 0:
        eightBall=`Yep`;
        break;
    case 1:
        eightBall=`F No`;
        break;
    case 2:
        eightBall=`No way`;
        break;
    case 3:
        eightBall=`Positively yes`;
        break;
    case 4:
        eightBall=`You don't want to know`;
        break;
    case 5:
        eightBall=`Answer to vulgar to type`;
        break;
    case 6:
        eightBall=`shit yes`;
        break;
    case 7:
        eightBall=`Shut up Idiot`;
        break;
}
console.log(eightBall);



class Senior extends Component {
    render() {
        return (
            <div>
                <div className="seniorContain">

                    {`Hi Angie the answer is ${eightBall}`}
                </div>
            </div>
        );
    }
}

export default Senior;