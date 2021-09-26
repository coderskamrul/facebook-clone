import React from 'react';
import { Avatar } from '@material-ui/core';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import '../PostAreaBox/PostArea.css';

function PostArea(){
    return(
        <div className="post-body">
            <div className="post-top">
            <Avatar />
            <form>
               
                <input className="post-input" placeholder="What's on your mind, Hmd Kamrul" />
                
            <button className="hidden-btn">hiden</button>
            </form>
            </div>
            
            <div className="post-bottom">
                <div className="icon-button">
                <VideoCallIcon style={{color: "red"}} />
                <h4>Live Video</h4>
                </div>
                <div className="icon-button">
                <PhotoLibraryIcon style={{color: "green"}}  />
                <h4>Photo/Video</h4>
                </div>
                <div className="icon-button">
                <InsertEmoticonIcon style={{color: "orange"}}  />
                <h4>Feeling/Activity</h4>
                </div>
            </div>
        </div>
    );
}
export default PostArea;