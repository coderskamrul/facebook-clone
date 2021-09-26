import React from 'react';
import Newpost from '../NewPost/Newpost';
import '../NewPost/Newpost.css'
function NewPostComponent(){
    return(

        <div className="tk">
            <Newpost 
            userimg="https://assets.codepen.io/6053306/internal/avatars/users/default.png"
            user="Hmd Kamrul Hasaan"
            date="2 h"
            description="I am a security specialist and developer."
            postImg="https://bestprofilepictures.com/wp-content/uploads/2021/04/Cool-Profile-Picture.jpg"
            />
            <Newpost 
            userimg=""
            user="Shariful Islam"
            date="2 h"
            description="Are You Searching For Best Funny Comedy Status Video For Whatsapp"
            postImg="https://blog.hubspot.com/hs-fs/hubfs/Google%20Drive%20Integration/How%20to%20Find%20the%20Perfect%20GIF%2010%20Must-Try%20Websites-1.gif?width=390&height=294&name=How%20to%20Find%20the%20Perfect%20GIF%2010%20Must-Try%20Websites-1.gif"
            />

        </div>
    );
}
export default NewPostComponent;