import React from 'react';
import Story from './Story';
import '../Feeds/StoryReal.css'
function StoryReal(){
    return(

        <div className="story-real"> 
            <Story img="https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg" title="kamrul"/>
            <Story img="https://www.attitudestatus.org/wp-content/uploads/2021/05/White-rose-girl-attitude-dp.jpg" title="hasan"/>
            <Story img="https://png.pngtree.com/png-clipart/20200930/ourlarge/pngtree-illustration-of-hijab-girl-focus-on-thinking-while-raising-a-hand-png-image_2356055.jpg" title="Sharif"/>
            <Story img="https://data.whicdn.com/images/282645913/original.jpg" title="Jobayer"/>
            <Story img="https://www.attitudestatus.org/wp-content/uploads/2021/05/Girl-with-Brown-Hijab-Hidden-face-dp.jpg" title="Kalam"/>
        </div>
    );
}
export default StoryReal;