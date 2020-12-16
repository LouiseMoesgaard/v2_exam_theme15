import React from 'react';
import NavigationOrder from '../../components/navigationOrder/NavigationOrder';
import CircleButton from '../../components/circleButton/CircleButton';
import Meme from '../../images/Memes/meme.jpg';
import Meme2 from '../../images/Memes/meme2.png';
import Meme3 from '../../images/Memes/meme3.png';

import './Help.scss';

class Help extends React.Component {
    render(){
        return (
            <div className="Help">
                <NavigationOrder />
                <h1>Help...</h1>
                <div className="helpMessage">
                    <p>Type in your table number, and we will come to you! You will find the table number at the end of each table!</p>
                </div>
                <div className="tableNumber">
                    <div className="inputContainer">
                        <p>Table number</p>
                        <input type="numbers" placeholder="Table Number" className="tablenumber"></input>
                    </div>
                        <div className="buttonContainer">
                            <CircleButton />
                        </div>
                    </div>
                <div className="waitingAnimation">
                    <h3>While you are waiting...</h3>
                    <img src={Meme} alt="" />
                    <img src={Meme2} alt="" />
                    <img src={Meme3} alt="" />
                </div>
            </div>
        );
        
    }
}
  
  export default Help;