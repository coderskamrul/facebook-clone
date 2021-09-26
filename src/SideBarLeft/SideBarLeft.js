import React from 'react';    
import SideBarRow from './SideBarRow'; 
import PersonIcon from '@material-ui/icons/Person';
import GroupIcon from '@material-ui/icons/Group';
import StorefrontIcon from '@material-ui/icons/Storefront';  
import YouTubeIcon from '@material-ui/icons/YouTube';
import HistoryIcon from '@material-ui/icons/History';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import '../SideBarLeft/SidebarLeft.css'

function SideBarLeft(){

    return(
        <div className="scrolling">
            <SideBarRow icon={PersonIcon} title="Hmd Kamrul Hasan" />
            <SideBarRow icon={GroupIcon} title="Friends" />
            <SideBarRow icon={GroupIcon} title="Groups" />
            <SideBarRow icon={StorefrontIcon} title="Marketplace" />
            <SideBarRow icon={YouTubeIcon} title="Watch" />
            <SideBarRow icon={HistoryIcon} title="Memories" />
            <SideBarRow icon={ExpandMoreIcon} title="See More" />

        </div>
    );
}
export default SideBarLeft;