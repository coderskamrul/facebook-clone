import React from 'react';
import { Avatar } from '@material-ui/core';
import './SidebarLeft.css'

function SideBarRow(props){

    return(
        <div className="sidebarRow">
            {props.icon && <props.icon />}
          <h4>{props.title}</h4>
        </div>
    );
}
export default SideBarRow;