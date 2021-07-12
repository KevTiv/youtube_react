import React from 'react';
import './stylesheet/SideBar.css';
import {MdMenu, MdExplore, MdSubscriptions, MdVideoLibrary} from "react-icons/md";
import {AiFillHome} from "react-icons/ai";

function SideBar() {
    return(
        <div className="sidebar">
            <div className="burgerMenu">
                <MdMenu className="burgerMenuLogo" />
            </div>

            <div className="homeComponent">
                <AiFillHome className="homeComponentLogo" />
                <div>Home</div>
            </div>

            <div className="exploreComponent">
                <MdExplore className="exploreComponentLogo" />
                <div>Explore</div>
            </div>

            <div className="subscriptionComponent">
                <MdSubscriptions className="subscriptionComponentLogo" />
                <div>Subscriptions</div>
            </div>

            <div className="libraryComponent">
                <MdVideoLibrary className="libraryComponentLogo" />
                <div>Library</div>
            </div>
        </div>
    )
}

export default SideBar;