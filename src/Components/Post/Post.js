import { Avatar } from '@mui/material';
import React, { Component } from 'react';
import './Post.css';
import postimage from "../../images/unnamed.jpg";
import love from "../../images/love.svg"; 
import comment from "../../images/comment.svg"; 
import share from "../../images/share.svg"; 
import { height } from '@mui/system';
class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            commentList:[]
         }
    }  
    componentDidMount(){
        this.getComments();
    }
getComments=()=>{
    // let data=[
    //     {
    //         "username":"sravanthi_dasyam",
    //         "commentId":"1234",
    //         "timeStamp":"123456",
    //         "description":"Aw!"
    //     },
    //     {
    //         "username":"mahesh_babu",
    //         "commentId":"1234",
    //         "timeStamp":"123456",
    //         "description":"Beautiful!!"
    //     },
    //     {
    //         "username":"nani",
    //         "commentId":"1234",
    //         "timeStamp":"123456",
    //         "description":"Cute",
    //     },
        
    // ];
    fetch('http://localhost:8080/comments/'+this.props.id)
            .then(response => response.json())
            .then(data => {
                this.setState({commentList: data});
        });
        
    

   
}
submitComments =(event) =>{
    if(event.key == 'Enter'){
        let comment = event.currentTarget.value;
        if(comment!=null || comment!=undefined){

            let payload = {
                
                 "commentId": Math.floor(Math.random()*1000000).toString(),
                 "userId":JSON.parse(localStorage.getItem("users")).uid,
                 "postId":this.props.id,
                "timeStamp": new Date().getTime(),
                "comment": comment
            }

            const requestOptions ={
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body : JSON.stringify(payload),
            }

            fetch("http://localhost:8080/comments",requestOptions)
            .then(response => response.json())
            .then(data => {
                this.getComments();
            })
            .catch(error =>{

            })

            
        
        

        }
    }
}

    render() {
        return (
            <div className='post_container'>
                {/* header */}
                <div className='post_header'>
                    {/* <Avatar className='post_image' src={this.state.profileImage} /> */}
                    <Avatar className='post_image' src="" />
                    <div className='post_username'>{this.props.userName}</div>
                </div>

                <div>
                    <img src={this.props.postImage} width="620px" />
                </div>

                <div>
                    <div style={{"marginLeft":"10px","margin-bottom":"-150px"}}>
                         <img src={love} className="post_reactimage"/>
                         <img src={comment} className="post_reactimage"/>
                         <img src={share} className="post_reactimage"/>
                    </div>
                <div style={{"margin-top":"5px","margin":"15px","fontWeight":"bold"}}>
                 {this.props.likes} likes
                    </div>
                </div>
                <div>
                    {
                        this.state.commentList.map((item,index)=>(
                            index < 4 ?

                            <div className='post_comment'>{item.userName}: {item.comment}</div> : <span></span>
                        ))
                    }
                    {/* <div className='post_comment'>Aw!!!!</div>
                    <div className='post_comment'>Beautiful!!</div> */}
                    <input text="text" onKeyPress={this.submitComments} className='post_commentbox' placeholder='Add a cooment...' />
                </div>
              
                
            </div>
        );
    }
}

export default Post;