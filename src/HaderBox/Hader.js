import { Avatar, IconButton } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ForumIcon from "@material-ui/icons/Forum";
import GroupIcon from "@material-ui/icons/Group";
import HomeIcon from "@material-ui/icons/Home";
import MenuIcon from "@material-ui/icons/Menu";
import NotificationsIcon from "@material-ui/icons/Notifications";
import SearchIcon from "@material-ui/icons/Search";
import StorefrontIcon from "@material-ui/icons/Storefront";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import React from "react";
import "../HaderBox/Hader.css";

function Hader() {
  return (
    <div className="hader">
      <div className="hader_left">
        <img src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo-500x313.png" />
        <div className="hader_input">
          <SearchIcon />
          <input type="search" placeholder="Search Facebook"/>
        </div>
      </div>
      <div className="hader_center">
        <div className="option">
          <HomeIcon className="active" />
        </div>
        <div className="option">
          <GroupIcon />
        </div>
        <div className="option">
          <SubscriptionsIcon />
        </div>
        <div className="option">
          <StorefrontIcon />
        </div>
        <div className="option">
          <SupervisedUserCircleIcon />
        </div>
      </div>
      <div className="hader_right">
        <div className="profile_info">
          <Avatar src="https://assets.codepen.io/6053306/internal/avatars/users/default.png"/>
          <h4>Hmd Kam..</h4>
        </div>

        <IconButton>
          <MenuIcon />
        </IconButton>

        <IconButton>
          <ForumIcon />
        </IconButton>

        <IconButton>
          <NotificationsIcon />
        </IconButton>

        <IconButton>
          <ExpandMoreIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Hader;
