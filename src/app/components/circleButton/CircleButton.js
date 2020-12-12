import React from 'react';
import './CircleButton.scss';
import arrow from '../../images/arrow.svg';

//<a href="https://www.freevector.com/free-arrow-icon-vector-19234">FreeVector.com</a>

class CircleButton extends React.Component{

    constructor(props){
        super(props);
    }

    render(){

        return(
            <div className="CircleButton">
                <img src={arrow}/>
            </div>
        )
    }


}

export default CircleButton;