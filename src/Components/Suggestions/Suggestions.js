import { Avatar } from '@mui/material';
import React, { Component } from 'react';
import './Suggestions.css';
import imgSrc from '../../images/pp1.png';

class Suggestions extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    } 
    render() {
        return (
            <div>
                <div className='suggestions_container'>
                    <div className='suggestions_header'>
                       <div>Suggestions for You</div>
                    </div>
                    <div className='suggestions_body'>
                        <div className='suggestions_friends'>
                            <Avatar src={imgSrc} className='suggestions_image' />
                            <div className='suggestions_username'>bunny</div>
                        </div>
                        <div className='suggestions_friends'>
                            <Avatar src={imgSrc} className='suggestions_image' />
                            <div className='suggestions_username'>ammu</div>
                        </div>
                        
                    </div>

                </div>
                
            </div>
        );
    }
}

export default Suggestions;