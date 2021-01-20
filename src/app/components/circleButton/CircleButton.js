import React from 'react';
import './CircleButton.scss';
import arrow from '../../images/arrow.svg';
import {Link} from "react-router-dom";

//<a href="https://www.freevector.com/free-arrow-icon-vector-19234">FreeVector.com</a>

class CircleButton extends React.Component{

    constructor(props){
        super(props);
    }

    render(){

        return(
            <Link to={this.props.link} onClick={e=>this.props.callback? this.props.callback(e): null}>
                <div className="CircleButton">
                    <img src={arrow}/>
                </div>
            </Link>
        )
    }


}

export default CircleButton;