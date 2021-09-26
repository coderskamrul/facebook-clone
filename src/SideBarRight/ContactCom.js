import React from 'react';
import { Avatar } from '@material-ui/core';
import './Contactinfo.css';

function ContactCom({contactName}){
    return(

    <div className="">
    <div className="sidebar-contact">
        <div className="Contacts-name">
        <Avatar  />
        <h4>{contactName}</h4>
        </div>
    </div>
        </div>
    );
}
export default ContactCom;