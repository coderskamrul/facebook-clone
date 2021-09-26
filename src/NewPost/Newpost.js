import React from 'react';
import '../NewPost/Newpost.css'
import { Avatar } from '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import NearMeIcon from '@material-ui/icons/NearMe';

function Newpost({userimg, user, date, description, postImg}){
    return(
        <div className="newpost">
             <div className="post-top">
            <Avatar src={userimg} />
                <h4>{user}</h4>
            </div>
            <div className="post-time">
                <p>{date}</p>
            </div>
            <div className="post-dec">
                <p>{description}</p>
            </div>
            <div className="post-img">
                <img className="img-teg" src={postImg} />
            </div>
            <dib className="post-status-icons">
                <div className="post-icon">
                <ThumbUpIcon />
                <h4>Like</h4>
                </div>
                <div className="post-icon">
                <ChatBubbleOutlineIcon />
                <h4>Comment</h4>
                </div>
                <div className="post-icon">
                <NearMeIcon />
                <h4>Share</h4>
                </div>
            </dib>

        </div>
    );
}
export default Newpost;