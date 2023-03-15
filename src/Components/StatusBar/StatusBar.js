import { Avatar } from '@mui/material';
import React, { Component } from 'react';
import './StatusBar.css';
import statusimg from "../../images/pp1.png";
import uploadImage from '../../images/statusadd.png';

class StatusBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            statusList: []
        }
    }  
componentDidMount(){
    this.getData();
}
    getData=()=>{
        // json data
        let data=[
            {
                "username":"sravanthi_dasyam",
                "imageURL":"../../images/pp1.png"
            },
            {
                "username":"mahesh",
                "imageURL":"../../images/pp1.png"
            },
            {
                "username":"prabhas",
                "imageURL":"../../images/pp1.png"
            },
            {
                "username":"nani",
                "imageURL":"../../images/pp1.png"
            },
            {
                "username":"ranbir",
                "imageURL":"../../images/pp1.png"
            },
            {
                "username":"ranveer",
                "imageURL":"../../images/pp1.png"
            },
            {
                "username":"vijay",
                "imageURL":"../../images/pp1.png"
            },
            {
                "username":"sharwa",
                "imageURL":"../../images/pp1.png"
            },
        ]
        this.setState({statusList: data});
    }
    render() {
        return (
            <div>
                <div className='statusbar_container'>
                    <img src={uploadImage} className='statusbar_upload' width='55px' height='55px'/>
                    {
                        this.state.statusList.map((item,index)=>(
                            <div className='status'>
                              <Avatar className="statusbar_status" src={statusimg} />
                              <div className='statusbar_text'>{item.username}</div>
                            </div>
                        ))
                    }
                   
                   
                </div>
            </div>
        );
    }
}

export default StatusBar;