import React from 'react';
import '../SideBarRight/SidebarRight.css';
import ContactCom from '../SideBarRight/ContactCom'

function SidebarRight(){
    return(
        <div className="SidebarRight">
             <h3>Sponsored</h3>
    <div className="sponsored-body">
        <div className="sponsored-img">
        <img src="https://observerbd.com/2019/06/12/observerbd.com_1560360273.jpg" />
        </div>
        <div className="sidebarRight-title">
       <h4>Website Develop</h4>
       <p>coderskamrul.com</p>
        </div>
    </div>

    <div className="sponsored-body">
        <div className="sponsored-img">
        <img src="https://observerbd.com/2019/06/12/observerbd.com_1560360273.jpg" />
        </div>
        <div className="sidebarRight-title">
       <h4>Comercial Background Musics</h4>
       <p>coderskamrul.com</p>
        </div>
    </div>
    
      <h3>Contacts</h3>
        <ContactCom contactName="Md Shariful Islam"/>
        <ContactCom contactName="Md Jobayer"/>
        <ContactCom contactName="Md Kamrul Hasan"/>
        <ContactCom contactName="Masurur Rahman"/>
        <ContactCom contactName="Sabbir Hossen"/>
        <ContactCom contactName="Rofiq Uddin"/>
        <ContactCom contactName="Rofiq Uddin"/>
        <ContactCom contactName="Rofiq Uddin"/>
        <ContactCom contactName="Rofiq Uddin"/>

    </div>
    );
}
export default SidebarRight;