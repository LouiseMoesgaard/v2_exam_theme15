import React from 'react';
import './StorageList.scss';


class StorageList extends React.Component {
    
    constructor(props){
        super(props);
    }
    
    toUpperCase = type => {
        return type[0].toUpperCase() + type.slice(1, type.length);
    }

    render(){
        const {storage, type} = this.props;

        return (
        <div className="StorageList">
            <h2> {this.toUpperCase(type)}</h2>

            <ul>
                {
                    storage.map((value, index)=> {
                        return <li  key={index}>
                                    {value.name} 
                                    <span> Amount: {value.amount}</span> 
                                </li>
                    })


                }
                
            </ul>
        </div>
        )

    }
}

export default StorageList;