import React from 'react';
import StoryReal from './StoryReal';
import PostArea from '../PostAreaBox/PostArea';
import Newpost from '../NewPost/Newpost';
import '../Feeds/Feed.css'
import NewPostComponent from '../NewPost/NewPostComponent'

function Feed(){
    return(

        <div className="feed">
            <StoryReal/>
            <PostArea/>
            <NewPostComponent/>
        </div>
    );
}
export default Feed;