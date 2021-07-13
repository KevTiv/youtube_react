import React from 'react';
import './stylesheet/SideBar.css';
import {MdMenu, MdExplore, MdSubscriptions, MdVideoLibrary} from "react-icons/md";
import {AiFillHome} from "react-icons/ai";

function SideBar() {
    return(
        <div className="sidebar">
            <button className="burgerMenu">
                <MdMenu className="burgerMenuLogo" />
            </button>

            <div className="homeComponent canHover">
                <AiFillHome className="homeComponentLogo" />
                <div>Home</div>
            </div>

            <div className="exploreComponent canHover">
                <MdExplore className="exploreComponentLogo" />
                <div>Explore</div>
            </div>

            <div className="subscriptionComponent canHover">
                <MdSubscriptions className="subscriptionComponentLogo" />
                <div>Subscriptions</div>
            </div>

            <div className="libraryComponent canHover">
                <MdVideoLibrary className="libraryComponentLogo" />
                <div>Library</div>
            </div>
        </div>
    )
}

export default SideBar;